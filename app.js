import express from 'express';

import { PORT } from './config/env.js';

import connectToDatabase from './database/mongodb.js';

import errorMiddleware from "./middleware/error.middleware.js";
import cookieParser from "cookie-parser";

import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscriptions.routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1/users', userRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);

app.use(errorMiddleware);

app.get('/', (req, res) => {
    res.send('Welcome to the Subscriptions tracker API');
})

app.listen(PORT, async() => {
    await connectToDatabase();
    console.log(`Server is running on port http://localhost:${PORT}`);
})

export default app;