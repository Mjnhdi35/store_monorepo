import { Knex } from 'knex';

export abstract class BaseRepository<T> {
  constructor(
    protected readonly knex: Knex,
    protected readonly tableName: string,
  ) {}

  async findAll(): Promise<T[]> {
    const rows = await this.knex(this.tableName).select('*');
    return rows.map((row) => this.transform(row));
  }

  async findById(id: number | string): Promise<T | null> {
    const row = await this.knex(this.tableName).where({ id }).first();
    return row ? this.transform(row) : null;
  }

  async create(data: Partial<T>): Promise<T> {
    const [result] = await this.knex(this.tableName).insert(data).returning('*');
    return this.transform(result);
  }

  async update(id: number | string, data: Partial<T>): Promise<T> {
    const [result] = await this.knex(this.tableName).where({ id }).update(data).returning('*');
    return this.transform(result);
  }

  async delete(id: number | string): Promise<boolean> {
    const result = await this.knex(this.tableName).where({ id }).delete();
    return result > 0;
  }

  // Abstract method to force implementation
  protected abstract transform(row: any): T;
}
