const {Router} = require('express')
const { body, check} = require('express-validator')
const {createAccount,login_user,logout_user} = require('../controllers/authController')

const router = Router()

router.post('/signup',check('username').exists(),body('email').isEmail(), body('user_password').isLength({ min: 6 }),createAccount)

router.post('/login',check('email').exists(), check('password').exists(), body('password').isLength({ min: 6 }),login_user)
router.get('/logout',logout_user);

//router.get('/islogin',authController.checker)

module.exports = router;