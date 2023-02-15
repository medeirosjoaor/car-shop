import Vehicle from './Vehicle';
import TCategory from '../Types/TCategory';
import IMotorcycle from '../Interfaces/IMotorcycle';

class Motorcycle extends Vehicle {
  private category: TCategory;
  private engineCapacity: number;

  constructor(motorcycle: IMotorcycle) {
    const { category, engineCapacity } = motorcycle;

    super(motorcycle);

    this.category = category;
    this.engineCapacity = engineCapacity;
  }
}

export default Motorcycle;
