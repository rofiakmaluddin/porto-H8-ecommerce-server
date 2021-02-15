const ProductController = require('../controllers/productController')
const UserController = require('../controllers/userController')
const authenticate = require('../middlewares/authenticate')
const authorize = require('../middlewares/authorize')
const router = require('express').Router()

router.post('/login', UserController.login)

router.use(authenticate)
router.post('/products', ProductController.add)
router.get('/products', ProductController.getAll)

router.use(authorize)
router.get('/products/:id', ProductController.getById)
router.put('/products/:id', ProductController.update)
// router.patch('/products/:id', ProductController.changeStock)
router.delete('/products/:id', ProductController.destroy)

module.exports = router