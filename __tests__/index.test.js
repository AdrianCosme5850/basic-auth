'use strict';

const supertest = require('supertest');
const app = require('../server');
const request = supertest(app.app);
const {db} = require('../app');

beforeAll(async() => {
    await db.sync();
});

describe('Test user authentication', () => {
    test('users should be able to sign up', async () => {
        const response = await request.post('/signup').send({
            username: 'Adrian',
            password: '1234'
        });
        expect(response.status).toEqual(200);
        expect(response.body.username).toEqual('Adrian')
    });
    test('users should be able to sign in', async () => {
        const response = await request.post('/signup').send({
            username: 'Adrian',
            password: '1234'
        });
        const user = await request.post('/signup').send({
            username: 'Adrian',
            password: '1234'
        }).set({ Authorization: 'basic'});
        expect(response.status).toEqual(200);
        expect(response.body.username).toEqual('Adrian')
    })
})
