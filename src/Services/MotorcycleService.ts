import IMotorcycle from '../Interfaces/IMotorcycle';
import Motorcycle from '../Domains/Motorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcycleService {
  private createDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }

    return null;
  }

  public async create(motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();

    const newMotorcycle = await motorcycleODM.create(motorcycle);

    return this.createDomain(newMotorcycle);
  }

  public async find() {
    const motorcycleODM = new MotorcycleODM();

    const motorcycles = await motorcycleODM.find();

    return motorcycles.map((motorcycle) => this.createDomain(motorcycle));
  }

  public async findById(id: string) {
    const motorcycleODM = new MotorcycleODM();

    const motorcycle = await motorcycleODM.findById(id);

    return this.createDomain(motorcycle);
  }
}

export default MotorcycleService;
