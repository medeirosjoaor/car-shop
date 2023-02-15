import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const router = Router();

router.get(
  '/motorcycles/:id', 
  (request, response, nextFunction) => 
    new MotorcycleController(request, response, nextFunction).findById(),
);

router.get(
  '/motorcycles', 
  (request, response, nextFunction) => 
    new MotorcycleController(request, response, nextFunction).find(),
);

router.post(
  '/motorcycles', 
  (request, response, nextFunction) => 
    new MotorcycleController(request, response, nextFunction).create(),
);

export default router;
