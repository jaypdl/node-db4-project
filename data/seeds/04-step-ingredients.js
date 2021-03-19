exports.seed = function (knex) {
  return knex('step_ingredients').insert([
    {step_id: 1, ingredient_id: 4, ingredient_quantity: 1},
    {step_id: 1, ingredient_id: 2, ingredient_quantity: 0.5},
    {step_id: 1, ingredient_id: 3, ingredient_quantity: 2},
    {step_id: 4, ingredient_id: 5, ingredient_quantity: 1},
    {step_id: 7, ingredient_id: 5, ingredient_quantity: 1},
    {step_id: 8, ingredient_id: 1, ingredient_quantity: 1},
    {step_id: 8, ingredient_id: 2, ingredient_quantity: 1},
  ])
}