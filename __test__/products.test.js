const request = require('supertest')
const app = require('../app');
const { createAccessToken } = require('../helpers/jwt');
const {sequelize} = require('../models')

afterAll((done) => {
  sequelize.close()
  done()
})

describe('POST /products', function() {
  it('should return status 201 with created data', function(done) {
    let body = {
      name: 'sepatu',
      img_url: 'qwerty',
      price: 500000,
      stock: 30,
      category: 'Fashion'
    }
    let access_token = createAccessToken({
      id: 1,
      email: 'admin@mail.com'
    })
    request(app)
      .post('/products')
      .send(body)
      .set('access_token', access_token)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.status).toEqual(201)
        expect(typeof res.body).toEqual('object')
        expect(res.body).toHaveProperty('id')
        expect(res.body).toHaveProperty('name')
        expect(res.body).toHaveProperty('img_url')
        expect(res.body).toHaveProperty('price')
        expect(res.body).toHaveProperty('stock')
        expect(res.body).toHaveProperty('category')
        expect(res.body).toHaveProperty('createdAt')
        expect(res.body).toHaveProperty('updatedAt')
        expect(typeof res.body.id).toEqual('number')
        expect(res.body.name).toEqual(body.name)
        expect(res.body.img_url).toEqual(body.img_url)
        expect(res.body.price).toEqual(body.price)
        expect(res.body.stock).toEqual(body.stock)
        expect(res.body.category).toEqual(body.category)
        expect(typeof res.body.createdAt).toEqual('string')
        expect(typeof res.body.updatedAt).toEqual('string')

        done();
      });
  });
});

describe('GET /products', function() {
  it('should return status 200 with data', function(done) {
    let access_token = createAccessToken({
      id: 1,
      email: 'admin@mail.com'
    })
    request(app)
      .get('/products')
      .set('access_token', access_token)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.status).toEqual(200)
        expect(Array.isArray(res.body)).toEqual(true)
        
        done();
      });
  });
});

describe('GET /products/:id', function() {
  it('should return status 200 with data', function(done) {
    let access_token = createAccessToken({
      id: 1,
      email: 'admin@mail.com'
    })
    request(app)
      .get(`/products/${1}`)
      .set('access_token', access_token)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.status).toEqual(200)
        expect(typeof res.body).toEqual('object')
        expect(res.body).toHaveProperty('id')
        expect(res.body).toHaveProperty('name')
        expect(res.body).toHaveProperty('img_url')
        expect(res.body).toHaveProperty('price')
        expect(res.body).toHaveProperty('stock')
        expect(res.body).toHaveProperty('category')
        expect(res.body).toHaveProperty('createdAt')
        expect(res.body).toHaveProperty('updatedAt')
        expect(typeof res.body.id).toEqual('number')
        expect(typeof res.body.createdAt).toEqual('string')
        expect(typeof res.body.updatedAt).toEqual('string')
        done();
      });
  });
});

describe('PUT /products/:id', function() {
  it('should return status 200 with updated data', function(done) {
    let body = {
      name: 'baju',
      img_url: 'asdfg',
      price: 300000,
      stock: 20,
      category: 'Fashion'
    }
    let access_token = createAccessToken({
      id: 1,
      email: 'admin@mail.com'
    })
    request(app)
      .put(`/products/${1}`)
      .send(body)
      .set('access_token', access_token)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.status).toEqual(200)
        expect(typeof res.body[1][0]).toEqual('object')
        expect(res.body[1][0]).toHaveProperty('id')
        expect(res.body[1][0]).toHaveProperty('name')
        expect(res.body[1][0]).toHaveProperty('img_url')
        expect(res.body[1][0]).toHaveProperty('price')
        expect(res.body[1][0]).toHaveProperty('stock')
        expect(res.body[1][0]).toHaveProperty('category')
        expect(res.body[1][0]).toHaveProperty('createdAt')
        expect(res.body[1][0]).toHaveProperty('updatedAt')
        expect(typeof res.body[1][0].id).toEqual('number')
        expect(res.body[1][0].name).toEqual(body.name)
        expect(res.body[1][0].img_url).toEqual(body.img_url)
        expect(res.body[1][0].price).toEqual(body.price)
        expect(res.body[1][0].stock).toEqual(body.stock)
        expect(res.body[1][0].category).toEqual(body.category)
        expect(typeof res.body[1][0].createdAt).toEqual('string')
        expect(typeof res.body[1][0].updatedAt).toEqual('string')

        done();
      });
  });
});

// describe('PATCH /products/:id', function() {
//   it('should return status 200 with updated data', function(done) {
//     let body = {
//       stock: 40
//     }
//     let access_token = createAccessToken({
//       id: 1,
//       email: 'admin@mail.com'
//     })
//     request(app)
//       .patch(`/products${1}`)
//       .set('access_token', access_token)
//       .end(function(err, res) {
//         if (err) return done(err);
//         expect(res.status).toEqual(200)
//         expect(typeof res.body).toEqual('object')
//         expect(res.body).toHaveProperty('id')
//         expect(res.body).toHaveProperty('name')
//         expect(res.body).toHaveProperty('img_url')
//         expect(res.body).toHaveProperty('price')
//         expect(res.body).toHaveProperty('stock')
//         expect(res.body).toHaveProperty('createdAt')
//         expect(res.body).toHaveProperty('updatedAt')
//         expect(typeof res.body.id).toEqual('number')
//         expect(res.body.stock).toEqual(body.stock)
//         expect(typeof res.body.createdAt).toEqual('string')
//         expect(typeof res.body.updatedAt).toEqual('string')
//         done();
//       });
//   });
// });

describe('DELETE /products/:id', function() {
  it('should return status 200 with data', function(done) {
    let access_token = createAccessToken({
      id: 1,
      email: 'admin@mail.com'
    })
    request(app)
      .delete(`/products/${10}`)
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
});