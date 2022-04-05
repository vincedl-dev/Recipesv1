const router = require('express').Router()
const { body, check,param} = require('express-validator')

const recipeController = require('../controllers/recipeController')



router.get('/all-recipes',recipeController.get_all_recipes)
router.get('/user',recipeController.get_user_recipes)
router.post('/new-recipe',check('title').exists(),check('body').exists(),recipeController.post_recipe)

router.get('/search',recipeController.search_recipes)



router.get('/:id',param('id').exists(),param('id').isLength({ min: 24 }) ,recipeController.get_single_recipe)

router.put('/:id',param('id').exists(),param('id').isLength({ min: 24 }) ,recipeController.update_recipe)

router.delete('/:id',param('id').exists(),param('id').isLength({ min: 24 }), recipeController.delete_recipe)



//router.get('/islogin',authController.checker)

module.exports = router;