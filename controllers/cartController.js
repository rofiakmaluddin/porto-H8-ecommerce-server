const { Cart } = require('../models') 

class CartController {
  static addToCart (req,res,next) {
    const {ProductId} = req.body
    const UserId = req.user
    // const quantity = 1
    // const purchased = false
    Cart
      .create({ProductId,UserId})
      .then(cart => {
        res.status(201).json(cart)
      })
      .catch(err => {
        next(err)
      })
  }
  static getCartData (req,res,next) {
    Cart
      .findAll({order: [['id', 'ASC']]})
      .then(carts => {
        res.status(200).json(carts)
      })
      .catch(err => {
        next(err)
      })
  }
  static updateQuantityCart (req,res,next) {
    const id = +req.params.id
    const {quantity} = req.body
    Cart
      .update({quantity},{where:{id},returning: true})
      .then(cart => {
        if (!cart) {
          throw {name: 'not found', message: 'Product is not found in your cart', status: 404}
        } else {
          res.status(200).json(cart)
          return Product.findByPk(id)
        }
      })
      .then(product => {
        let newStock = product.newStock - quantity
        return Product.update({newStock},{returning: true})
      })
      .then(product => {
        console.log(product);
      })
      .catch(err => {
        next(err)
      })
  }
  static destroyCart (req,res,next) {
    const id = +req.params.id
    Cart
      .destroy({where:{id}})
      .then(cart => {
        if (!cart) {
          throw {name: 'not found', message: 'Product is not found in your cart', status: 404}
        } else {
          res.status(200).json({message: 'Product has been deleted from your cart'})
        }
      })
      .catch(err => {
        next(err)
      })
  }
}

module.exports = CartController