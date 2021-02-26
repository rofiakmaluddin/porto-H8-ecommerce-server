const { Cart, Product } = require('../models') 

class CartController {
  static addToCart (req,res,next) {
    const {ProductId} = req.body
    const UserId = req.user
    let stock
    Product.findByPk(ProductId)
      .then(product => {
        stock = product.stock
        return Cart.findOne({ where: {ProductId} })
      })
      .then(cart => {
        // update
        if(cart && cart.quantity < stock) {
          let newQuantity = cart.quantity + 1
          return Cart.update({quantity: newQuantity}, { where: {ProductId} });
        }
        // insert
        else if (stock > 0) {return Cart.create({ProductId,UserId});}
      })
      .then(cart => {
        res.status(201).json(cart)
        return Product.decrement('stock', { where: {id:ProductId} })
      })
      .catch(err => {
        console.log(err, 'addToCart');
        next(err)
      })
  }
  static getCartData (req,res,next) {
    Cart
      .findAll({order: [['id', 'ASC']], include: [Product]})
      .then(carts => {
        res.status(200).json(carts)
      })
      .catch(err => {
        next(err)
      })
  }
  static updateQuantityCart (req,res,next) {
    const id = +req.params.id
    const {status, ProductId} = req.body
    let cart
    if (status) {
      Cart.increment('quantity', { where: {id} })
        .then(cart => {
          cart = cart
          return Product.decrement('stock', { where: {id: ProductId} })
        })
        .then(product => {
          console.log(cart, 'test cart <<<<<');
          res.status(200).json(cart)
        })
        .catch(err => {
          next(err)
        })
    } else {
      Cart.decrement('quantity', { where: {id} })
        .then(cart => {
          return Product.increment('stock', { where: {id: ProductId} })
        })
        .catch(err => {
          next(err)
        })
    }
    // Cart
    //   .update({quantity},{where:{id},returning: true})
    //   .then(cart => {
    //     if (!cart) {
    //       throw {name: 'not found', message: 'Product is not found in your cart', status: 404}
    //     } else {
    //       res.status(200).json(cart)
    //       return Product.findByPk(id)
    //     }
    //   })
    //   .then(product => {
    //     let newStock = product.newStock - quantity
    //     return Product.update({newStock},{returning: true})
    //   })
    //   .then(product => {
    //     console.log(product);
    //   })
    //   .catch(err => {
    //     next(err)
    //   })
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