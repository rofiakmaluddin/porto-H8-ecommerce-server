const CartController = require('../controllers/cartController')
const ProductController = require('../controllers/productController')
const UserController = require('../controllers/userController')
const WishlistController = require('../controllers/wishlistController')
const authenticate = require('../middlewares/authenticate')
const authorize = require('../middlewares/authorize')
const authorizeCustomer = require('../middlewares/authorizeCustomer')
const router = require('express').Router()


router.post('/login', UserController.login)
router.post('/loginCustomer', UserController.login)
router.post('/register', UserController.register)

router.use(authenticate)
router.get('/products', ProductController.getAll)
router.post('/products', authorize, ProductController.add)

router.get('/products/:id', authorize, ProductController.getById)
router.put('/products/:id', authorize, ProductController.update)
router.delete('/products/:id', authorize, ProductController.destroy)

router.use(authorizeCustomer)
router.post('/carts', CartController.addToCart)
router.get('/carts', CartController.getCartData)
router.patch('/carts/:id', CartController.updateQuantityCart)
router.delete('/carts/:id', CartController.destroyCart)

router.post('/wishlists', WishlistController.addToWishlist)
router.get('/wishlists', WishlistController.getWishlistData)
router.delete('/wishlists/:id', WishlistController.destroyWishlist)

module.exports = router