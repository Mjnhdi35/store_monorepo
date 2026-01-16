import { Body, Controller, Post } from '@nestjs/common';
import type { RegisterRequest, RegisterResponse } from '@smoothie_store/contracts';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() body: RegisterRequest): Promise<RegisterResponse['data']> {
    const user = await this.usersService.create(body);
    return {
      id: user.id,
      username: user.username,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
