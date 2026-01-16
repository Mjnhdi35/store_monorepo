export interface User {
  id: string;
  username: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export type UserId = string;
export type CreateUserInput = Omit<User, 'id' | 'createdAt' | 'updatedAt'> & { password: string };
export type UpdateUserInput = Partial<Omit<User, 'id' | 'createdAt' | 'updatedAt'>>;
