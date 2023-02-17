import * as sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';

const mockedCar = {
  model: 'Up',
  year: 2014,
  color: 'Black',
  status: true,
  buyValue: 27500,
  doorsQty: 4,
  seatsQty: 5,
};

const mockedCarWithId = {
  id: '63ee7649dc33b54c5a1e697b',
  model: 'Up',
  year: 2014,
  color: 'Black',
  status: true,
  buyValue: 27500,
  doorsQty: 4,
  seatsQty: 5,
};

describe('CarService unit test', function () {
  it('should create a car', async function () {
    sinon.stub(Model, 'create').resolves(mockedCarWithId);

    const carService = new CarService();

    const result = await carService.create(mockedCar);

    expect(result).to.be.deep.equal(mockedCarWithId);
  });

  it('should find all cars', async function () {
    sinon.stub(Model, 'find').resolves([mockedCarWithId]);

    const carService = new CarService();

    const result = await carService.find();

    expect(result).to.be.deep.equal([mockedCarWithId]);
  });

  it('should find a car', async function () {
    sinon.stub(Model, 'findById').resolves(mockedCarWithId);

    const carService = new CarService();

    const result = await carService.findById('63ee7649dc33b54c5a1e697b');

    expect(result).to.be.deep.equal(mockedCarWithId);
  });

  it('should update a car', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(mockedCarWithId);

    const carService = new CarService();

    const result = await carService.findByIdAndUpdate('63ee7649dc33b54c5a1e697b', mockedCar);

    expect(result).to.be.deep.equal(mockedCarWithId);
  });

  afterEach(function () {
    sinon.restore();
  });
});
