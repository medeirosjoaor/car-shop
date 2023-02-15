import { NextFunction, Request, Response } from 'express';
import MotorcycleService from '../Services/MotorcycleService';
import IMotorcycle from '../Interfaces/IMotorcycle';

class MotorcycleController {
  private nextFunction: NextFunction;
  private request: Request;
  private response: Response;
  private service: MotorcycleService;

  constructor(request: Request, response: Response, nextFunction: NextFunction) {
    this.request = request;
    this.response = response;
    this.nextFunction = nextFunction;
    this.service = new MotorcycleService();
  }

  public async create() {
    const motorcycle: IMotorcycle = {
      model: this.request.body.model,
      year: this.request.body.year,
      color: this.request.body.color,
      status: this.request.body.status,
      buyValue: this.request.body.buyValue,
      category: this.request.body.category,
      engineCapacity: this.request.body.engineCapacity,
    };

    try {
      const newMotorcycle = await this.service.create(motorcycle);

      return this.response.status(201).json(newMotorcycle);
    } catch (error) {
      this.nextFunction(error as Error);
    }
  }

  public async find() {
    try {
      const motorcycles = await this.service.find();

      return this.response.status(200).json(motorcycles);
    } catch (error) {
      this.nextFunction(error as Error);
    }
  }

  public async findById() {
    try {
      const { id } = this.request.params;

      const motorcycle = await this.service.findById(id);

      if (motorcycle) {
        return this.response.status(200).json(motorcycle);
      }

      return this.response.status(404).json({ message: 'Motorcycle not found' });
    } catch (error) {
      return this.response.status(422).json({ message: (error as Error).message });
    }
  }
}

export default MotorcycleController;
