import { Body, Controller, Post } from '@nestjs/common';
import type { LoginRequest, LoginResponse } from '@smoothie_store/contracts';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: LoginRequest): Promise<LoginResponse['data']> {
    return this.authService.login(body);
  }
}
