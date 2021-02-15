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