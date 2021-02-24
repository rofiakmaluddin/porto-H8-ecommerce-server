const request = require('supertest')
const app = require('../app');
const { createAccessToken } = require('../helpers/jwt');
const {sequelize} = require('../models')

afterAll((done) => {
  sequelize.close()
  done()
})

let idCartTest = 0

describe('POST /wishlists', function() {
  it('should return status 201 with created data', function(done) {
    let body = {
      UserId: 1,
      ProductId: 1,
    }
    let access_token = createAccessToken({
      id: 1,
      email: 'customer@mail.com'
    })
    request(app)
      .post('/wishlists')
      .send(body)
      .set('access_token', access_token)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.status).toEqual(201)
        expect(typeof res.body).toEqual('object')
        expect(res.body).toHaveProperty('id')
        expect(res.body).toHaveProperty('UserId')
        expect(res.body).toHaveProperty('ProductId')
        expect(res.body).toHaveProperty('createdAt')
        expect(res.body).toHaveProperty('updatedAt')
        expect(typeof res.body.id).toEqual('number')
        idCartTest = res.body.id
        expect(res.body.UserId).toEqual(body.UserId)
        expect(res.body.ProductId).toEqual(body.ProductId)
        expect(typeof res.body.createdAt).toEqual('string')
        expect(typeof res.body.updatedAt).toEqual('string')

        done();
      });
  });
  it('should return error message', function(done) {
    let body = {
      UserId: '',
      ProductId: ''
    }
    let access_token = createAccessToken({
      id: 1,
      email: 'customer@mail.com'
    })
    request(app)
      .post('/wishlists')
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

describe('GET /wishlists', function() {
  it('should return status 200 with data', function(done) {
    let access_token = createAccessToken({
      id: 1,
      email: 'customer@mail.com'
    })
    request(app)
      .get('/wishlists')
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
      .get('/wishlists')
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

describe('DELETE /wishlists/:id', function() {
  it('should return status 200 with success message', function(done) {
    let access_token = createAccessToken({
      id: 1,
      email: 'customer@mail.com'
    })
    request(app)
      .delete(`/wishlists/${idCartTest}`)
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
      .delete(`/wishlists/${10000}`)
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