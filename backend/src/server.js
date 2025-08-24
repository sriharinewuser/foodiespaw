import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import foodRouter from './routers/food.router.js';
import userRouter from './routers/user.router.js';
import orderRouter from './routers/order.router.js';
// import uploadRouter from './routers/upload.router.js';

import { dbconnect } from './config/database.config.js';
dbconnect();

const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000','https://foodiespaw.vercel.app',],
  })
);// ...existing code...
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self' https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com https://foodiespaw.onrender.com; img-src 'self' data: https:; connect-src 'self' https://foodiespaw.onrender.com"
  );
  next();
});
// ...existing code...
app.get('/', (req, res) => {
  res.status(200).json({ 
    message: 'FoodiesPaw Backend API is running',
    version: '1.0.0',
    endpoints: {
      foods: '/api/foods',
      users: '/api/users',
      orders: '/api/orders'
    }
  });
});

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.use('/api/foods', foodRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
// app.use('/api/upload', uploadRouter);

// Root route handler

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});
