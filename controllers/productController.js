const {Product} = require('../models')

class ProductController{
  static add (req,res,next){
    console.log(req.body);
    const {name,img_url,price,stock,category} = req.body
    const UserId = req.user
    Product
      .create({name,img_url,price,stock,category,UserId})
      .then(product => {
        res.status(201).json(product)
      })
      .catch(err => {
        console.log(err);
        next(err)
      })
  }
  static getAll (req,res,next){
    Product
      // .findAll({include: [User]})
      .findAll({order: [['id', 'ASC']]})
      .then(products => {
        console.log('masuk getAll >>>>>>');
        res.status(200).json(products)
      })
      .catch(err => {
        console.log(err);
        next(err)
      })
  }
  static getById (req,res,next){
    const id = +req.params.id
    Product
      // .findByPk(id, {include: User})
      .findByPk(id)
      .then(product => {
        res.status(200).json(product)
      })
      .catch(err => {
        console.log(err);
        next(err)
      })
  }
  static update (req,res,next){
    const id = +req.params.id
    const {name,img_url,price,stock,category} = req.body
    Product
      .update({name,img_url,price,stock,category},{where:{id},returning: true})
      .then(product => {
        res.status(200).json(product)
      })
      .catch(err => {
        console.log(err);
        next(err)
      })
  }
  // static changeStock (req,res,next){
    
  // }
  static destroy (req,res,next){
    const id = +req.params.id
    Product
      .destroy({where:{id}})
      .then(product => {
        res.status(200).json({message: 'Product has been deleted'})
      })
      .catch(err => {
        console.log(err);
        next(err)
      })
  }
}

module.exports = ProductController