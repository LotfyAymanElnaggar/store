import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import RateLimit from 'express-rate-limit';
import errorMiddleware from './middleware/error.middleware';

const PORT = 3000;

// Create instance of server
const app: Application = express();

// Parse incomming requests
app.use(express.json());

// HTTP Requiest logger Middleware
app.use(morgan('common'));

// HTTP Security Middleware
app.use(helmet());

// Apply rate limit
app.use(
  RateLimit({
    windowMs: 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    message: '5 Limited Access Per miniute for none users',
  })
);

// add routing for / path
app.get('/', (req: Request, res: Response) => {
  // throw new Error();

  res.json({
    message: 'Hello World 🌍',
  });
});

app.post('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello World 🌍',
    data: req.body,
  });
});

// Error handelling
app.use(errorMiddleware);

// 404
app.use((_req: Request, res: Response) => {
  res.status(404).json({
    message:
      'Ohh you are lost, read API documentation to find your way back home 😂',
  });
});

// Start express server
app.listen(PORT, () => {
  console.log(`Server is starting at port:${PORT}`);
});

export default app;
