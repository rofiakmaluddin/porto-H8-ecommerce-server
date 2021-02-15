const {Product} = require('../models')
const product = require('../models/product')

class ProductController{
  static add (req,res,next){
    const {name,img_url,price,stock} = req.body
    const UserId = req.user
    Product
      .create({name,img_url,price,stock,UserId})
      .then(product => {
        res.status(201).json(product)
      })
      .catch(err ={
        next(err)
      })
  }
  static getAll (req,res,next){
    Product
      .findAll({include: User})
      .then(products => {
        res.status(200).json(products)
      })
      .catch(err => {
        next(err)
      })
  }
  static getById (req,res,next){
    const id = +req.params.id
    Product
      .findByPk(id, {include: User})
      .then(product => {
        res.status(200).json(product)
      })
      .catch(err => {
        next(err)
      })
  }
  static update (req,res,next){
    const id = +req.params.id
    const {name,img_url,price,stock} = req.body
    Product
      .update({name,img_url,price,stock},{where:{id},returning: true})
      .then(product => {
        res.status(200).json(product)
      })
      .catch(err => {
        next(err)
      })
  }
  // static changeStock (req,res,next){
    
  // }
  static destroy (req,res,next){
    const id = +req.params.id
    Product
      .destroy({where:{id}})
      .then(res => {
        res.status(200).json({message: 'Product has been deleted'})
      })
      .catch(err => {
        next(err)
      })
  }
}

module.exports = ProductController