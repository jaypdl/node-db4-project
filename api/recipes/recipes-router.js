const router = require('express').Router()
const Recipe = require('./recipes-model')

/***** Base Endpoint: /api/recipes *****/

// [GET] / (Returns all recipes)
  router.get('/', async (req, res, next) => {
    try {
      const allRecipes = await Recipe.getAll()
      res.json(allRecipes)
    } catch (err) {
      next(err)
    }
  })

// [GET] /:id (Returns recipe matching ID)
  router.get('/:id', async (req, res, next) => {
    try{
      const recipe = await Recipe.getRecipeById(req.params.id)
      res.json(recipe)
    } catch (err) {
      next(err)
    }
  })

// Error Catching

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    message: `There was a problem with your ${req.method} in the recipes router`,
    errMessage: err.message,
    stack: err.stack
  })
})

module.exports = router