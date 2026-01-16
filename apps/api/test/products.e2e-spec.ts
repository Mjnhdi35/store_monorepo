import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../src/app.module';
import { TransformInterceptor } from '../src/common/interceptors/transform.interceptor';
import { ProductsRepository } from '../src/modules/products/products.repository';

describe('ProductsModule (e2e)', () => {
  let app: INestApplication;

  const mockProductsRepository = {
    findAll: jest.fn(),
    create: jest.fn(),
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(ProductsRepository)
      .useValue(mockProductsRepository)
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

  it('/api/products (GET) - List products', () => {
    const mockProducts = [
      { id: 1, name: 'S1', price: '10' },
      { id: 2, name: 'S2', price: '20' },
    ];
    mockProductsRepository.findAll.mockResolvedValue(mockProducts);

    return request(app.getHttpServer())
      .get('/api/products')
      .expect(200)
      .expect((res) => {
        expect(res.body.data).toHaveLength(2);
        expect(res.body.data[0].name).toBe('S1');
      });
  });

  it('/api/products (POST) - Create product', () => {
    const dto = {
      name: 'New Smoothie',
      price: 5.99,
      description: 'Desc',
      image: 'img.png',
    };

    mockProductsRepository.create.mockResolvedValue({
      id: 3,
      ...dto,
      price: '5.99', // Repo transforms logic simulated
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return request(app.getHttpServer())
      .post('/api/products')
      .send(dto)
      .expect(201)
      .expect((res) => {
        expect(res.body.data.name).toBe('New Smoothie');
      });
  });
});
