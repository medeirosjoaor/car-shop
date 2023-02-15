import { Router } from 'express';
import CarController from '../Controllers/CarController';

const router = Router();

router.get(
  '/cars/:id', 
  (request, response, nextFunction) => 
    new CarController(request, response, nextFunction).findById(),
);

router.get(
  '/cars', 
  (request, response, nextFunction) => 
    new CarController(request, response, nextFunction).find(),
);

router.post(
  '/cars', 
  (request, response, nextFunction) => new CarController(request, response, nextFunction).create(),
);

export default router;
