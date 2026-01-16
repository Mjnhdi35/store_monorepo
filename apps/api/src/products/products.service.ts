import { Injectable } from '@nestjs/common';
import type { Knex } from 'knex';
import { InjectKnex } from 'nestjs-knex';

@Injectable()
export class ProductsService {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async findAll() {
    console.log('product');
    return this.knex('products').select('*');
  }

  async create(data: { name: string; price: number }) {
    return this.knex('products').insert(data).returning('*');
  }
}
