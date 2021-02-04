import express, { Request, Response } from 'express';

import { statusCodes } from './src/config/statusCodes';
import { passport, isAuthenticated } from './src/middleware/auth';

import session from 'express-session';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import userRouter from './src/routes/user';
import authRouter from './src/routes/auth';
import roomRouter from './src/routes/room';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cookieParser(process.env.SECRET));
app.use(
    session({
        secret: process.env.SECRET!,
        resave: true,
        saveUninitialized: true,
        cookie: { maxAge: 60 * 60 * 24 * 1000 },
    })
);

// Initialize Passport and restore authentication state, if any, from the session.
app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({
        origin: 'http://localhost:3000', // allow to server to accept request from different origin
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true, // allow session cookie from browser to pass through
    })
);

app.get('/', isAuthenticated, (req: Request, res: Response) => {
    res.status(statusCodes.SUCCESS).send(req.user);
});

app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/rooms', roomRouter);

const server = app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});

export { app, server, passport };
