import { Injectable } from '@nestjs/common';
import type { User } from '@smoothie_store/types';
import { Knex } from 'knex';
import { InjectKnex } from 'nestjs-knex';
import { BaseRepository } from '../../common/base/base.repository';

// Internal type including password
export type UserEntity = User & { password?: string };

@Injectable()
export class UsersRepository extends BaseRepository<UserEntity> {
  constructor(@InjectKnex() knex: Knex) {
    super(knex, 'users');
  }

  protected transform(row: any): UserEntity {
    return {
      id: row.id,
      username: row.username,
      email: row.email,
      password: row.password,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    };
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    const row = await this.knex(this.tableName).where({ email }).first();
    return row ? this.transform(row) : null;
  }

  async findByUsername(username: string): Promise<UserEntity | null> {
    const row = await this.knex(this.tableName).where({ username }).first();
    return row ? this.transform(row) : null;
  }

  async findByEmailOrUsername(email: string, username: string): Promise<UserEntity | null> {
    const row = await this.knex(this.tableName).where({ email }).orWhere({ username }).first();
    return row ? this.transform(row) : null;
  }
}
