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
  let prevStepId
  console.log(prevStepId)
  const processedRecipe = {
    recipe_id: recipe[0].recipe_id,
    recipe_name: recipe[0].recipe_name,
    recipe_created: recipe[0].recipe_created,
    steps: recipe.reduce((acc, step, ind) => {
      // step does/don't have ingr, or seen if before
      // step.ingredient_id !== null
      console.log('startacc: ',acc)
      console.log('step: ', step)
      console.log('ind: ', ind)
      if (prevStepId !== step.step_id){
        if (!step.ingredient_id) {
          console.log(acc[step])
          prevStepId = step.step_id
          return acc.concat({
            step_number: step.step_number,
            step_id: step.step_id,
            step_instructions: step.step_instructions,
            ingredients: [] 
          })
        // } else if()) { // Trying to see if the step_number already exists in the acc
        //     console.log('found it? ', step)
        } else {
          prevStepId = step.step_id
          return acc.concat({
            // if (currentStepId === step.) //if steps match, put it in as current ingredient (var for current and prev)
            step_number: step.step_number,
            step_id: step.step_id,
            step_instructions: step.step_instructions,
            ingredients: [{
              ingredient_id: step.ingredient_id,
              ingredient_name: step.ingredient_name,
              quantity: step.ingredient_quantity
            }]
          })
        }
      } else {
        return acc.concat([])
      }

    },[])
  }
  return processedRecipe
}

module.exports = {
  getAll,
  getRecipeById
}


// return {
//   step_number: step.step_number,
//   step_id: step.step_id,
//   step_instructions: step.step_instructions,
//   ingredients: step.ingredient_id 
//     ? (recipe.filter(ing => {
//     return ing.ingredient_id && ing.step_id === step.step_id
//     }).map(item => {
//       return {
//         ingredient_id: item.ingredient_id,
//         ingredient_name: item.ingredient_name,
//         quantity: item.ingredient_quantity
//       }
//     }))
//     : []
// }
