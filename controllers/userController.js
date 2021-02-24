const { compare } = require('../helpers/bcrypt')
const { createAccessToken } = require('../helpers/jwt')
const { User } = require('../models')

class UserController{
  static login (req,res,next) {
    const {email,password} = req.body
    User
    .findOne({where:{email}})
    .then(user => {
      if(!user) throw {name: 'login error', message: 'Invalid email or password', status: 401}
      const comparedPass = compare(password,user.password)
      if(!comparedPass) throw {name: 'login error', message: 'Invalid email or password', status: 401}
        
        const {id,email} = user
        const access_token = createAccessToken({id,email})
        console.log(access_token, 'acctoen');
        res.status(200).json({access_token})
      })
      .catch(err => {
        next(err)
      })
    }
  static register (req,res,next) {
    const {email,password} = req.body
    User
    .create({email,password})
    .then(user => {
      res.status(201).json({
        id: user.id,
        email: user.email
      })
    })
    .catch(err => {
      next(err)
    })
  }
}

module.exports = UserController