import Vehicle from './Vehicle';
import ICar from '../Interfaces/ICar';

class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar) {
    const { doorsQty, seatsQty } = car;

    super(car);

    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
  }
}

export default Car;
