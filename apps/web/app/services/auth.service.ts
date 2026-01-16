import type {
  AuthResponse,
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from '@smoothie_store/contracts';
import type { User } from '@smoothie_store/types';

export class AuthService {
  async login(credentials: LoginRequest): Promise<AuthResponse> {
    const response = await $fetch<LoginResponse>('/api/auth/login', {
      method: 'POST',
      body: credentials,
    });
    return response.data;
  }

  async register(data: RegisterRequest): Promise<User> {
    const response = await $fetch<RegisterResponse>('/api/users', {
      method: 'POST',
      body: data,
    });
    return response.data;
  }
}
