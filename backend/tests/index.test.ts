import { app, server } from '../src';
import { agent as request } from 'supertest';

describe('testing api route', () => {
    it('GET /', async () => {
        const res = await request(app).get('/');
        expect(res.text).toEqual('Hello, world!');
        expect(res.status).toEqual(200);
    });
});

afterAll(async () => {
    await server.close();
});
