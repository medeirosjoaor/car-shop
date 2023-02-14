import { Router } from 'express';
import CarController from '../Controllers/CarController';

const router = Router();

router.post(
  '/cars', 
  (request, response, nextFunction) => new CarController(request, response, nextFunction).create(),
);

export default router;
