import express, { Response, Request, NextFunction } from 'express';
import cors from 'cors';
import { repos } from './routes/repos';
import { terrible } from './middleware/terrible';
import { AppError } from './models/AppError';

// CORS header configuration
const corsOptions = {
  methods: 'GET',
  allowedHeaders: 'Content-Type, Authorization',
  origin: 'http://localhost:3000',
};

export const app = express();

// Routes. Note these will fail about 25% due to "terrible" middleware.

// moved cors before the terrible() middleware
// when the terrible middleware is before cors() -  you get cors errors as well as failed requests

app.use('/repos', cors(corsOptions), terrible(), repos);

// error handling middleware should be loaded after the loading the routes
app.use('/', (err: Error, req: Request, res: Response, next: NextFunction) => {
  const status = err instanceof AppError ? err.status : 500;

  const formattedError: { status: number; message: string } = {
    status,
    message: err.message,
  };

  res.status(status);
  res.json(formattedError);
});
