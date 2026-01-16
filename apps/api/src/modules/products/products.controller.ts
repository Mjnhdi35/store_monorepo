import { Body, Controller, Get, Post } from '@nestjs/common';
import type {
  CreateProductRequest,
  ProductListResponse,
  ProductResponse,
} from '@smoothie_store/contracts';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAll(): Promise<ProductListResponse['data']> {
    return this.productsService.findAll();
  }

  @Post()
  async create(@Body() body: CreateProductRequest): Promise<ProductResponse['data']> {
    return this.productsService.createProduct(body);
  }
}
