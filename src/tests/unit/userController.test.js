import { expect } from 'chai';
import chaiHttp from 'chai-http';
import chai from 'chai';
import { response } from 'express';
import app from '../../server.js';

chai.use(chaiHttp);

describe('createUser function from userController', () => {
  it('should return status 200 with the user data on body response', () => {
    const mockUserData = {
      name: "maria",
      email: "maria@gmail.com"
    }

    chai.request(app).post('/user').send(mockUserData);

    console.log(response.status);
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.equal(userData);
  })

});
