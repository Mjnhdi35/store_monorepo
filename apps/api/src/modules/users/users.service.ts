import { ConflictException, Injectable } from '@nestjs/common';
import type { RegisterRequest } from '@smoothie_store/contracts';
import { BaseService } from '../../common/base/base.service';
import { HashingService } from '../../common/services/hashing/hashing.service';
import { UserEntity, UsersRepository } from './users.repository';

@Injectable()
export class UsersService extends BaseService<UserEntity> {
  constructor(
    protected readonly repository: UsersRepository,
    private readonly hashingService: HashingService,
  ) {
    super(repository);
  }

  async create(data: RegisterRequest): Promise<UserEntity> {
    const existing = await this.findByEmailOrUsername(data.email, data.username);
    if (existing) {
      throw new ConflictException(
        existing.email === data.email ? 'Email already exists' : 'Username already exists',
      );
    }

    const password = await this.hashingService.hash(data.password);
    return this.repository.create({ ...data, password } as any);
  }

  async findByEmailOrUsername(email: string, username: string): Promise<UserEntity | null> {
    return this.repository.findByEmailOrUsername(email, username);
  }

  findByEmail(email: string) {
    return this.repository.findByEmail(email);
  }

  findByUsername(username: string) {
    return this.repository.findByUsername(username);
  }
}
