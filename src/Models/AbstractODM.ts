import { Model, Schema, UpdateQuery, isValidObjectId, model, models } from 'mongoose';

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

  public async find(): Promise<T[] | []> {
    return this.model.find({});
  }

  public async findById(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) {
      throw new Error('Invalid mongo id');
    }

    return this.model.findById(id);
  }

  public async findByIdAndUpdate(id: string, object: T): Promise<T | null> {
    if (!isValidObjectId(id)) {
      throw new Error('Invalid mongo id');
    }

    return this.model.findByIdAndUpdate(id, { ...object as UpdateQuery<T> }, { new: true });
  }
}

export default AbstractODM;
