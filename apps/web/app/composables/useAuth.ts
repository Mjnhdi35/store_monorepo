import type { LoginRequest, RegisterRequest } from '@smoothie_store/contracts';
import type { User } from '@smoothie_store/types';
import { AuthService } from '../services/auth.service';

export const useAuth = () => {
  const authService = new AuthService();
  const token = useCookie('auth_token');
  const user = useState<User | null>('auth_user', () => null);

  const login = async (credentials: LoginRequest): Promise<boolean> => {
    try {
      const data = await authService.login(credentials);
      token.value = data.access_token;
      user.value = data.user;
      return true;
    } catch (error) {
      console.error('Login failed', error);
      return false;
    }
  };

  const register = async (userData: RegisterRequest): Promise<boolean> => {
    try {
      await authService.register(userData);
      return true;
    } catch (error) {
      console.error('Registration failed', error);
      return false;
    }
  };

  const logout = () => {
    token.value = null;
    user.value = null;
    navigateTo('/login');
  };

  return {
    token,
    user,
    login,
    register,
    logout,
  };
};
