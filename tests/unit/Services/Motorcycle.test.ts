import * as sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import TCategory from '../../../src/Types/TCategory';

const mockedMotorcycle = {
  model: 'Honda Cb 600f Hornet',
  year: 2014,
  color: 'Red',
  status: true,
  buyValue: 45.000,
  category: 'Street' as TCategory,
  engineCapacity: 600,
};

const mockedMotorcycleWithId = {
  id: '63ee7649dc33b54c5a1e697b',
  model: 'Honda Cb 600f Hornet',
  year: 2014,
  color: 'Red',
  status: true,
  buyValue: 45.000,
  category: 'Street' as TCategory,
  engineCapacity: 600,
};

describe('MotorcycleService unit test', function () {
  it('should create a motorcycle', async function () {
    sinon.stub(Model, 'create').resolves(mockedMotorcycleWithId);

    const motorcycleService = new MotorcycleService();

    const result = await motorcycleService.create(mockedMotorcycle);

    expect(result).to.be.deep.equal(mockedMotorcycleWithId);
  });

  it('should find all motorcycles', async function () {
    sinon.stub(Model, 'find').resolves([mockedMotorcycleWithId]);

    const motorcycleService = new MotorcycleService();

    const result = await motorcycleService.find();

    expect(result).to.be.deep.equal([mockedMotorcycleWithId]);
  });

  it('should find a motorcycle', async function () {
    sinon.stub(Model, 'findById').resolves(mockedMotorcycleWithId);

    const motorcycleService = new MotorcycleService();

    const result = await motorcycleService.findById('63ee7649dc33b54c5a1e697b');

    expect(result).to.be.deep.equal(mockedMotorcycleWithId);
  });

  it('should update a motorcycle', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(mockedMotorcycleWithId);

    const motorcycleService = new MotorcycleService();

    const result = await motorcycleService
      .findByIdAndUpdate('63ee7649dc33b54c5a1e697b', mockedMotorcycle);

    expect(result).to.be.deep.equal(mockedMotorcycleWithId);
  });

  afterEach(function () {
    sinon.restore();
  });
});
