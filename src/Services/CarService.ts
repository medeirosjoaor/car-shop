import ICar from '../Interfaces/ICar';
import Car from '../Domains/Car';
import CarODM from '../Models/CarODM';

class CarService {
  private createDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }

    return null;
  }

  public async create(car: ICar) {
    const carODM = new CarODM();

    const newCar = await carODM.create(car);

    return this.createDomain(newCar);
  }

  public async find() {
    const carODM = new CarODM();

    const cars = await carODM.find();

    return cars;
  }

  public async findById(id: string) {
    const carODM = new CarODM();

    const car = await carODM.findById(id);

    return car;
  }
}

export default CarService;
