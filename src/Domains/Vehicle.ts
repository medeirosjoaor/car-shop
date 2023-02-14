import IVehicle from '../Interfaces/IVehicle';

abstract class Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;

  constructor(vehicle: IVehicle) {
    const { id, model, year, color, status, buyValue } = vehicle;

    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = status ?? false;
    this.buyValue = buyValue;
  }
}

export default Vehicle;
