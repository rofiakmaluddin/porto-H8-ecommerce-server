const request = require('supertest')
const app = require('../app');
const { createAccessToken } = require('../helpers/jwt');
const {sequelize} = require('../models')

afterAll((done) => {
  sequelize.close()
  done()
})

let idCartTest = 0

describe('POST /carts', function() {
  it('should return status 201 with created data', function(done) {
    let body = {
      ProductId: 1
    }
    let access_token = createAccessToken({
      id: 1,
      email: 'customer@mail.com'
    })
    request(app)
      .post('/carts')
      .send(body)
      .set('access_token', access_token)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.status).toEqual(201)
        expect(typeof res.body).toEqual('object')
        expect(res.body).toHaveProperty('id')
        expect(res.body).toHaveProperty('UserId')
        expect(res.body).toHaveProperty('ProductId')
        expect(res.body).toHaveProperty('quantity')
        expect(res.body).toHaveProperty('purchased')
        expect(res.body).toHaveProperty('createdAt')
        expect(res.body).toHaveProperty('updatedAt')
        expect(typeof res.body.id).toEqual('number')
        idCartTest = res.body.id
        expect(res.body.ProductId).toEqual(body.ProductId)
        expect(res.body.purchased).toEqual(false)
        expect(typeof res.body.createdAt).toEqual('string')
        expect(typeof res.body.updatedAt).toEqual('string')

        done();
      });
  });
  it('should return error message', function(done) {
    let body = {
      UserId: '',
      ProductId: '',
      quantity: ''
    }
    let access_token = createAccessToken({
      id: 1,
      email: 'customer@mail.com'
    })
    request(app)
      .post('/carts')
      .send(body)
      .set('access_token', access_token)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.status).toEqual(500)
        expect(Array.isArray(res.body)).toEqual(true)
        expect(res.body.length).not.toEqual(0)

        done();
      });
  });
});

describe('GET /carts', function() {
  it('should return status 200 with data', function(done) {
    let access_token = createAccessToken({
      id: 1,
      email: 'customer@mail.com'
    })
    request(app)
      .get('/carts')
      .set('access_token', access_token)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.status).toEqual(200)
        expect(Array.isArray(res.body)).toEqual(true)
        
        done();
      });
  });
  it('should return error message', function(done) {
    let access_token = createAccessToken({
      id: 0,
      email: ''
    })
    request(app)
      .get('/carts')
      .set('access_token', access_token)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.status).toEqual(400)
        expect(Array.isArray(res.body)).toEqual(true)
        expect(res.body.length).not.toEqual(0)
        
        done();
      });
  });
});

describe('PATCH /carts/:id', function() {
  it('should return status 200 with updated data', function(done) {
    let body = {
      quantity: 1
    }
    let access_token = createAccessToken({
      id: 1,
      email: 'customer@mail.com'
    })
    request(app)
      .patch(`/carts/${idCartTest}`)
      .send(body)
      .set('access_token', access_token)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.status).toEqual(200)
        expect(typeof res.body[1][0]).toEqual('object')
        expect(res.body[1][0]).toHaveProperty('id')
        expect(res.body[1][0]).toHaveProperty('UserId')
        expect(res.body[1][0]).toHaveProperty('ProductId')
        expect(res.body[1][0]).toHaveProperty('quantity')
        expect(res.body[1][0]).toHaveProperty('purchased')
        expect(res.body[1][0]).toHaveProperty('createdAt')
        expect(res.body[1][0]).toHaveProperty('updatedAt')
        expect(typeof res.body[1][0].id).toEqual('number')
        expect(res.body[1][0].quantity).toEqual(body.quantity)
        expect(typeof res.body[1][0].createdAt).toEqual('string')
        expect(typeof res.body[1][0].updatedAt).toEqual('string')

        done();
      });
  });
  it('should return error message', function(done) {
    let body = {
      quantity: ''
    }
    let access_token = createAccessToken({
      id: 1,
      email: 'customer@mail.com'
    })
    request(app)
      .patch(`/carts/${1000}`)
      .send(body)
      .set('access_token', access_token)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.status).toEqual(500)
        expect(Array.isArray(res.body)).toEqual(true)
        expect(res.body.length).not.toEqual(0)

        done();
      });
  });
});

describe('DELETE /carts/:id', function() {
  it('should return status 200 with success message', function(done) {
    let access_token = createAccessToken({
      id: 1,
      email: 'customer@mail.com'
    })
    request(app)
      .delete(`/carts/${idCartTest}`)
      .set('access_token', access_token)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.status).toEqual(200)
        expect(typeof res.body).toEqual('object')
        expect(res.body).toHaveProperty('message')
        expect(typeof res.body.message).toEqual('string')
        done();
      });
  });
  it('should return error message', function(done) {
    let access_token = createAccessToken({
      id: 1,
      email: 'customer@mail.com'
    })
    request(app)
      .delete(`/carts/${10000}`)
      .set('access_token', access_token)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.status).toEqual(404)
        expect(Array.isArray(res.body)).toEqual(true)
        expect(res.body.length).not.toEqual(0)
        done();
      });
  });
});