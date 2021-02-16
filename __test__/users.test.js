const request = require('supertest')
const app = require('../app')

describe('POST /login', function() {
  it('should return status 200 with access token', function(done) {
    let body = {
      email:'admin@mail.com',
      password: '1234'
    }
    request(app)
      .post('/login')
      .send(body)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.status).toEqual(200)
        expect(typeof res.body).toEqual('object')
        expect(res.body).toHaveProperty('access_token')
        expect(typeof res.body.access_token).toEqual('string')

        done();
      });
  });
});