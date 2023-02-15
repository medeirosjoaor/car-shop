import IVehicle from './IVehicle';
import TCategory from '../Types/TCategory';

interface IMotorcycle extends IVehicle {
  category: TCategory;
  engineCapacity: number;
}

export default IMotorcycle;
