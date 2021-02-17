const {User} = require('../models')

const authorize = (req,res,next) => {
  User.findByPk(req.user)
    .then(user => {
      if(!user) throw {name: 'auth error', message: 'not authorized', status: 401}
      if(user.role !== 'admin') throw {name: 'auth error', message: 'not authorized', status: 401}
      next()
    })
    .catch(err => {
      next(err)
    })
}

module.exports = authorize