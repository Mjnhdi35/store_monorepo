import type { User } from '@smoothie_store/types';
import type { ApiResponse } from '../common/responses';

export interface AuthResponse {
  access_token: string;
  user: User;
}

export type LoginResponse = ApiResponse<AuthResponse>;
export type RegisterResponse = ApiResponse<User>;
