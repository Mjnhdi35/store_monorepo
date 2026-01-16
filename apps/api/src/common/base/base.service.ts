import { BaseRepository } from './base.repository';

export abstract class BaseService<T> {
  constructor(protected readonly repository: BaseRepository<T>) {}

  async findAll(): Promise<T[]> {
    return this.repository.findAll();
  }

  async findById(id: number | string): Promise<T | null> {
    return this.repository.findById(id);
  }
}
