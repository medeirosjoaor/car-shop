import { Model, Schema, model, models } from 'mongoose';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected name: string;
  protected schema: Schema;

  constructor(name: string, schema: Schema) {
    this.name = name;
    this.schema = schema;
    this.model = models[this.name] || model(this.name, this.schema);
  }

  public async create(object: T): Promise<T> {
    return this.model.create({ ...object });
  }
}

export default AbstractODM;
