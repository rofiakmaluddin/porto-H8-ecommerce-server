const { verify } = require("../helpers/jwt")
const {User} = require('../models')

const authenticate = async (req,res,next) => {
  const access_token = req.headers.access_token
  if(!access_token) return next({name: 'auth error', message: 'not authenticated', status: 400})
  try{
    const payload = verify(access_token)
    // console.log(payload, 'ini payload auth >>>');
    if(!payload || !payload.id) return next ({name: 'auth error', message: 'not authenticated', status: 400})
    // console.log('lolos di verify AC auth >>>>');
    const user = await User.findByPk(payload.id)
    if(!user) return next ({name: 'auth error', message: 'not authenticated', status: 400})
    req.user = user.id
    next()
  } catch (err) {
    next(err)
  }
}

module.exports = authenticate