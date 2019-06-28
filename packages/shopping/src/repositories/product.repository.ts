import { DefaultCrudRepository } from '@loopback/repository';
import { Product } from '../models';
import { MongoDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class ProductRepository extends DefaultCrudRepository<
  Product,
  typeof Product.prototype.id
  > {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Product, dataSource);
  }
}
