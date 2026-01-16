import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { RegisterRequest } from '@smoothie_store/contracts';
import request from 'supertest';
import { AppModule } from '../src/app.module';
import { TransformInterceptor } from '../src/common/interceptors/transform.interceptor';
import { UsersRepository } from '../src/modules/users/users.repository';

describe('UsersModule (e2e)', () => {
  let app: INestApplication;

  const mockUsersRepository = {
    findByEmailOrUsername: jest.fn(),
    create: jest.fn(),
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(UsersRepository)
      .useValue(mockUsersRepository)
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

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('/api/users (POST) - Register successfully', () => {
    const dto: RegisterRequest = {
      username: 'testuser',
      email: 'test@example.com',
      password: 'password123',
    };

    // Mock: No existing user
    mockUsersRepository.findByEmailOrUsername.mockResolvedValue(null);
    // Mock: Create returns user entity
    mockUsersRepository.create.mockResolvedValue({
      id: 1,
      username: dto.username,
      email: dto.email,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return request(app.getHttpServer())
      .post('/api/users')
      .send(dto)
      .expect(201)
      .expect((res) => {
        const body = res.body as { data: RegisterRequest };
        expect(body.data.username).toBe(dto.username);
        expect(mockUsersRepository.create).toHaveBeenCalled();
      });
  });

  it('/api/users (POST) - Fail duplicate', () => {
    const dto: RegisterRequest = {
      username: 'testuser',
      email: 'test@example.com',
      password: 'password123',
    };

    // Mock: Existing user found
    mockUsersRepository.findByEmailOrUsername.mockResolvedValue({
      id: 1,
      email: dto.email,
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return request(app.getHttpServer()).post('/api/users').send(dto).expect(409); // Conflict
  });
});
