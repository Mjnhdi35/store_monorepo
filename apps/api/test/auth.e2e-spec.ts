import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../src/app.module';
import { TransformInterceptor } from '../src/common/interceptors/transform.interceptor';
import { HashingService } from '../src/common/services/hashing/hashing.service';
import { UsersRepository } from '../src/modules/users/users.repository';

describe('AuthModule (e2e)', () => {
  let app: INestApplication;

  const mockUsersRepository = {
    findByEmailOrUsername: jest.fn(),
  };

  const mockHashingService = {
    compare: jest.fn(),
    hash: jest.fn(), // If needed
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(UsersRepository)
      .useValue(mockUsersRepository)
      .overrideProvider(HashingService)
      .useValue(mockHashingService)
      .compile();

    app = moduleFixture.createNestApplication();
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
    app.useGlobalInterceptors(new TransformInterceptor());
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/api/auth/login (POST) - Success', () => {
    const loginDto = { usernameOrEmail: 'user', password: 'password' };

    // 1. Mock finding user
    mockUsersRepository.findByEmailOrUsername.mockResolvedValue({
      id: 1,
      username: 'user',
      password: 'hashed_password',
      email: 'user@example.com',
    });

    // 2. Mock password match
    mockHashingService.compare.mockResolvedValue(true);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return request(app.getHttpServer())
      .post('/api/auth/login')
      .send(loginDto)
      .expect(201)
      .expect((res) => {
        const body = res.body as { data: { user: { username: string }; access_token: string } };
        expect(body.data).toHaveProperty('access_token');
        expect(body.data.user.username).toBe('user');
      });
  });

  it('/api/auth/login (POST) - Fail Password', () => {
    const loginDto = { usernameOrEmail: 'user', password: 'wrong' };

    // 1. Mock finding user
    mockUsersRepository.findByEmailOrUsername.mockResolvedValue({
      id: 1,
      password: 'hashed',
      username: 'user',
    });

    // 2. Mock password fail
    mockHashingService.compare.mockResolvedValue(false);

    return request(app.getHttpServer()).post('/api/auth/login').send(loginDto).expect(401);
  });
});
