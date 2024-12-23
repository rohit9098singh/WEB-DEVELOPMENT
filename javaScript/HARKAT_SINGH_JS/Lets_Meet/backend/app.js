import express from 'express';
import cors from 'cors';
import mongoDb from './config/db.js';
import dotenv from 'dotenv';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import mongosanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();

// Middleware for security, parsing, and logging
app.use(express.json({ limit: '10kb' }));
app.use(cors({ origin: '*', methods: ['GET', 'PATCH', 'POST', 'DELETE', 'PUT'], credentials: true }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

// Rate limiter to prevent abuse
const limiter = rateLimit({
  max: 3000,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests, please try again later.',
});
app.use('/api', limiter);

// Sanitize data to prevent NoSQL injection and XSS
app.use(mongosanitize());
app.use(xss());

// Connect to MongoDB
mongoDb();

// Placeholder for routes
// Example: app.use("/api", yourRoute);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({ message: err.message || 'Internal Server Error' });
});

export default app;
