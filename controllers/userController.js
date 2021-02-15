const { compare } = require('../helpers/bcrypt')
const { createAccessToken } = require('../helpers/jwt')
const {User} = require('../models')

class UserController{
  static login (req,res,next) {
    const {email,password} = req.body
    User
      .findOne({where:{email}})
      .then(user => {
        if(!user) throw {name: 'login error', message: 'Invalid email or password'}
        const comparedPass = compare(password,user.password)
        if(!comparedPass) throw {name: 'login error', message: 'Invalid email or password'}
        const {id,email} = user
        const access_token = createAccessToken({id,email})
        res.status(200).json({access_token})
      })
      .catch(err => {
        next(err)
      })
  }
}

module.exports = UserController