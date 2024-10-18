import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import 'dotenv/config'

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({
    limit: "16kb"
}))

app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}));

app.use(express.static("public"));

app.use(cookieParser());

//routes
import userRouter from './routes/user.routes.js';

//routes declartion. When we were doing with app.get() then we could have used the normal way of using router, that is: app.get('/addUser'). But since we are using a router from an external file, so we need to use a different way. And that way is: using app.use()

app.use("/api/v1/users", userRouter);

//The app will be made this way now: http://localhost:3000/api/v1/users/register

export default app;