import { isValidObjectId, Schema } from 'mongoose';
import AbstractODM from './AbstractODM';
import ICar from '../Interfaces/ICar';

class CarODM extends AbstractODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });

    super('Car', schema);
  }

  public async create(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }

  public async find(): Promise<ICar[] | []> {
    return this.model.find(
      {}, 
      { id: '$_id', model: 1, year: 1, color: 1, status: 1, buyValue: 1, doorsQty: 1, seatsQty: 1 },
    );
  }

  public async findById(id: string): Promise<ICar | null> {
    if (!isValidObjectId(id)) {
      throw new Error('Invalid mongo id');
    }

    return this.model.findById(
      id, 
      { id: '$_id', model: 1, year: 1, color: 1, status: 1, buyValue: 1, doorsQty: 1, seatsQty: 1 },
    );
  }

  public async findByIdAndUpdate(id: string, car: ICar): Promise<ICar | null> {
    if (!isValidObjectId(id)) {
      throw new Error('Invalid mongo id');
    }

    return this.model.findByIdAndUpdate(
      id,
      { ...car },
      {
        fields: {
          id: '$_id',
          model: 1,
          year: 1,
          color: 1,
          status: 1,
          buyValue: 1,
          doorsQty: 1,
          seatsQty: 1,
        },
        new: true,
      },
    );
  }
}

export default CarODM;
