import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const router = Router();

router.post(
  '/motorcycles', 
  (request, response, nextFunction) => 
    new MotorcycleController(request, response, nextFunction).create(),
);

export default router;
