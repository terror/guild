import express, { Request, Response } from 'express';
import { statusCodes } from './config/statusCodes';

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (_: Request, res: Response) => {
    res.status(statusCodes.SUCCESS).send('Hello, world!');
});

const server = app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});

export { app, server };
