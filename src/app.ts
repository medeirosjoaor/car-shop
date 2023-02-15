import express from 'express';
import CarRouter from './Routes/CarRouter';
import MotorcycleRouter from './Routes/MotorcycleRouter';

const app = express();

app.use(express.json());
app.use(CarRouter);
app.use(MotorcycleRouter);

export default app;
