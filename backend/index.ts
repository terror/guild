import express, { Request, Response } from 'express';

import { statusCodes } from './src/config/statusCodes';
import { passport } from './src/middleware/auth';
import { isAuthenticated } from './src/middleware/auth';

import session from 'express-session';
import cookieParser from 'cookie-parser';

import userRouter from './src/routes/user';
import authRouter from './src/routes/auth';

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

app.get('/', isAuthenticated, (req: Request, res: Response) => {
    res.status(statusCodes.SUCCESS).send(req.user);
});

app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);

const server = app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});

export { app, server, passport };
