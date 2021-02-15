const request = require('supertest')

describe('POST /login', function() {
  it('should return status 200 with access token', function(done) {
    let body = {
      email:'user1@mail.com',
      password: 'user11'
    }
    request(app)
      .post('/login')
      .send(body)
      .end(function(err, res) {
        if (err) done(err);
        expect(res.status).toEqual(200)
        expect(typeof res.body).toEqual('object')
        expect(res.body).toHaveProperty('access_token')
        expect(typeof res.body.access_token).toEqual('string')

        done();
      });
  });
});

describe('POST /products', function() {
  it('should return status 201 with created data', function(done) {
    let body = {
      name: sepatu,
      img_url: qwerty,
      price: 500000,
      stock: 30
    }
    request(app)
      .post('/products')
      .send(body)
      .set('access_token', 'qwertyuiop')
      .end(function(err, res) {
        if (err) done(err);
        expect(res.status).toEqual(201)
        expect(typeof res.body).toEqual('object')
        expect(res.body).toHaveProperty('id')
        expect(res.body).toHaveProperty('name')
        expect(res.body).toHaveProperty('img_url')
        expect(res.body).toHaveProperty('price')
        expect(res.body).toHaveProperty('stock')
        expect(res.body).toHaveProperty('createdAt')
        expect(res.body).toHaveProperty('updatedAt')
        expect(typeof res.body.id).toEqual('number')
        expect(res.body.name).toEqual(body.name)
        expect(res.body.img_url).toEqual(body.img_url)
        expect(res.body.price).toEqual(body.price)
        expect(res.body.stock).toEqual(body.stock)
        expect(typeof res.body.createdAt).toEqual('string')
        expect(typeof res.body.updatedAt).toEqual('string')

        done();
      });
  });
});

describe('GET /products', function() {
  it('should return status 200 with data', function(done) {
    request(app)
      .get('/products')
      .set('access_token', 'qwertyuiop')
      .end(function(err, res) {
        if (err) done(err);
        expect(res.status).toEqual(200)
        expect(Array.isArray(res.body)).toEqual(true)
        
        done();
      });
  });
});

describe('GET /products/:id', function() {
  it('should return status 200 with data', function(done) {
    request(app)
      .get(`/products${1}`)
      .set('access_token', 'qwertyuiop')
      .end(function(err, res) {
        if (err) done(err);
        expect(res.status).toEqual(200)
        expect(typeof res.body).toEqual('object')
        expect(res.body).toHaveProperty('id')
        expect(res.body).toHaveProperty('name')
        expect(res.body).toHaveProperty('img_url')
        expect(res.body).toHaveProperty('price')
        expect(res.body).toHaveProperty('stock')
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
      name: baju,
      img_url: asdfg,
      price: 300000,
      stock: 20
    }
    request(app)
      .put(`/products${1}`)
      .send(body)
      .set('access_token', 'qwertyuiop')
      .end(function(err, res) {
        if (err) done(err);
        expect(res.status).toEqual(200)
        expect(typeof res.body).toEqual('object')
        expect(res.body).toHaveProperty('id')
        expect(res.body).toHaveProperty('name')
        expect(res.body).toHaveProperty('img_url')
        expect(res.body).toHaveProperty('price')
        expect(res.body).toHaveProperty('stock')
        expect(res.body).toHaveProperty('createdAt')
        expect(res.body).toHaveProperty('updatedAt')
        expect(typeof res.body.id).toEqual('number')
        expect(res.body.name).toEqual(body.name)
        expect(res.body.img_url).toEqual(body.img_url)
        expect(res.body.price).toEqual(body.price)
        expect(res.body.stock).toEqual(body.stock)
        expect(typeof res.body.createdAt).toEqual('string')
        expect(typeof res.body.updatedAt).toEqual('string')

        done();
      });
  });
});

describe('PATCH /products/:id', function() {
  it('should return status 200 with updated data', function(done) {
    let body = {
      stock: 40
    }
    request(app)
      .patch(`/products${1}`)
      .set('access_token', 'qwertyuiop')
      .end(function(err, res) {
        if (err) done(err);
        expect(res.status).toEqual(200)
        expect(typeof res.body).toEqual('object')
        expect(res.body).toHaveProperty('id')
        expect(res.body).toHaveProperty('name')
        expect(res.body).toHaveProperty('img_url')
        expect(res.body).toHaveProperty('price')
        expect(res.body).toHaveProperty('stock')
        expect(res.body).toHaveProperty('createdAt')
        expect(res.body).toHaveProperty('updatedAt')
        expect(typeof res.body.id).toEqual('number')
        expect(res.body.stock).toEqual(body.stock)
        expect(typeof res.body.createdAt).toEqual('string')
        expect(typeof res.body.updatedAt).toEqual('string')
        done();
      });
  });
});

describe('DELETE /products/:id', function() {
  it('should return status 200 with data', function(done) {
    request(app)
      .delete(`/products${1}`)
      .set('access_token', 'qwertyuiop')
      .end(function(err, res) {
        if (err) done(err);
        expect(res.status).toEqual(200)
        expect(typeof res.body).toEqual('object')
        expect(res.body).toHaveProperty('message')
        expect(typeof res.body).toEqual('string')
        done();
      });
  });
});