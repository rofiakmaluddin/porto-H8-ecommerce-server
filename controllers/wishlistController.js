const {Wishlist, Product} = require('../models')

class WishlistController {
  static addToWishlist (req,res,next) {
    const {ProductId} = req.body
    const UserId = req.user
    Wishlist.findOne({where:{ProductId}})
      .then(wishlist => {
        if (!wishlist) {
          return Wishlist.create({ProductId,UserId})
        }
      })
      .then(wishlist => {
        res.status(201).json(wishlist)
      })
      .catch(err => {
        next(err)
      })
  }
  static getWishlistData (req,res,next) {
    Wishlist
      .findAll({
        order: [['id', 'ASC']],
        include: [Product]
      })
      .then(wishlists => {
        res.status(200).json(wishlists)
      })
      .catch(err => {
        next(err)
      })
  }
  static destroyWishlist (req,res,next) {
    const id = +req.params.id
    Wishlist
      .destroy({where:{id}})
      .then(wishlist => {
        if (!wishlist) {
          throw {name: 'not found', message: 'Product is not found in your wishlist', status: 404}
        } else {
          res.status(200).json({message: 'Product has been deleted from your wishlist'})
        }
      })
      .catch(err => {
        next(err)
      })
  }
}

module.exports = WishlistController