const {User} = require('../models')

const authorizeCustomer = async (req,res,next) => {
  try {
    const user = await User.findByPk(req.user)
    if (!user) {
      return next({name: 'auth error', message: 'not authorized', status: 401})
    }
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = authorizeCustomer