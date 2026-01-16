import { Injectable } from '@nestjs/common';
import type { CreateProductInput, Product } from '@smoothie_store/types';
import { BaseService } from '../../common/base/base.service';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService extends BaseService<Product> {
  constructor(protected readonly repository: ProductsRepository) {
    super(repository);
  }

  async createProduct(data: CreateProductInput): Promise<Product> {
    return this.repository.create(data);
  }
}
