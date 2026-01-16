import { Injectable } from '@nestjs/common';
import type { Product } from '@smoothie_store/types';
import { Knex } from 'knex';
import { InjectKnex } from 'nestjs-knex';
import { BaseRepository } from '../../common/base/base.repository';

@Injectable()
export class ProductsRepository extends BaseRepository<Product> {
  constructor(@InjectKnex() knex: Knex) {
    super(knex, 'products');
  }

  protected transform(row: any): Product {
    return {
      id: row.id,
      name: row.name,
      price: row.price,
      description: row.description,
      image: row.image,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    };
  }
}
