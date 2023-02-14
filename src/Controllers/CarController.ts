import { NextFunction, Request, Response } from 'express';
import CarService from '../Services/CarService';
import ICar from '../Interfaces/ICar';

class CarController {
  private nextFunction: NextFunction;
  private request: Request;
  private response: Response;
  private service: CarService;

  constructor(request: Request, response: Response, nextFunction: NextFunction) {
    this.request = request;
    this.response = response;
    this.nextFunction = nextFunction;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = {
      model: this.request.body.model,
      year: this.request.body.year,
      color: this.request.body.color,
      status: this.request.body.status,
      buyValue: this.request.body.buyValue,
      doorsQty: this.request.body.doorsQty,
      seatsQty: this.request.body.seatsQty,
    };

    try {
      const newCar = await this.service.create(car);

      return this.response.status(201).json(newCar);
    } catch (error) {
      this.nextFunction(error as Error);
    }
  }
}

export default CarController;
