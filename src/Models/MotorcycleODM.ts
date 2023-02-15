import { isValidObjectId, Schema } from 'mongoose';
import AbstractODM from './AbstractODM';
import IMotorcycle from '../Interfaces/IMotorcycle';

class MotorcycleODM extends AbstractODM<IMotorcycle> {
  constructor() {
    const schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });

    super('Motorcycle', schema);
  }

  public async create(motorcycle: IMotorcycle): Promise<IMotorcycle> {
    return this.model.create({ ...motorcycle });
  }

  public async find(): Promise<IMotorcycle[] | []> {
    return this.model.find();
  }

  public async findById(id: string): Promise<IMotorcycle | null> {
    if (!isValidObjectId(id)) {
      throw new Error('Invalid mongo id');
    }

    return this.model.findById(id);
  }
}

export default MotorcycleODM;
