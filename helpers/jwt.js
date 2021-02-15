const jwt = require('jsonwebtoken');

const createAccessToken = payload => {
  return jwt.sign(payload, process.env.SECRET)
}

const verify = access_token => {
  return jwt.verify(access_token, process.env.SECRET)
}

module.exports = {
  createAccessToken,
  verify
}