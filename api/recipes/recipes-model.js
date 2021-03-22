const db = require('../../data/db-config')

const getAll = async () => {
  const recipes = await db('recipes as r')
    .leftJoin('steps as s', 'r.recipe_id', 's.recipe_id')
    .leftJoin('step_ingredients as si', 's.step_id', 'si.step_id')
    .leftJoin('ingredients as i', 'si.ingredient_id', 'i.ingredient_id')
    .select('r.recipe_id', 'recipe_name', 'recipe_created', 's.step_id', 'step_number', 'step_instructions', 'i.ingredient_id', 'ingredient_name', 'ingredient_quantity')
  return recipes
}


const getRecipeById = async (recipe_id) => {
  const recipe = await db('recipes as r')
    .leftJoin('steps as s', 'r.recipe_id', 's.recipe_id')
    .leftJoin('step_ingredients as si', 's.step_id', 'si.step_id')
    .leftJoin('ingredients as i', 'si.ingredient_id', 'i.ingredient_id')
    .select('r.recipe_id', 'recipe_name', 'recipe_created', 's.step_id', 'step_number', 'step_instructions', 'i.ingredient_id', 'ingredient_name', 'ingredient_quantity')
    .where('r.recipe_id', recipe_id)
  const processedRecipe = {
    recipe_id: recipe[0].recipe_id,
    recipe_name: recipe[0].recipe_name,
    recipe_created: recipe[0].recipe_created,
    steps: recipe.map(step => {
      return {
        step_number: step.step_number,
        step_id: step.step_id,
        step_instructions: step.step_instructions,
        ingredients: step.ingredient_id 
          ? (recipe.filter(ing => {
          return ing.ingredient_id && ing.step_id === step.step_id
          }).map(item => {
            return {
              ingredient_id: item.ingredient_id,
              ingredient_name: item.ingredient_name,
              quantity: item.ingredient_quantity
            }
          }))
          : []
      }
    })
  }
  return processedRecipe
}

module.exports = {
  getAll,
  getRecipeById
}