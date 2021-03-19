exports.seed = function (knex) {
  return knex('steps').insert([
    {step_number: 1, step_instructions: 'Mix pancake powder, milk, egg', recipe_id: 1},
    {step_number: 2, step_instructions: 'Cook and Enjoy', recipe_id: 1},
    {step_number: 1, step_instructions: 'Pre-heat oven', recipe_id: 2},
    {step_number: 2, step_instructions: 'Put in Frozen Pizza', recipe_id: 2},
    {step_number: 3, step_instructions: 'Burn Pizza, Call Dominos', recipe_id: 2},
    {step_number: 4, step_instructions: 'Eat Pizza', recipe_id: 2},
    {step_number: 5, step_instructions: 'Still Hungry, cook Frozen Pizza', recipe_id: 2},
    {step_number: 1, step_instructions: 'Mix Oats and Milk', recipe_id: 3},
    {step_number: 2, step_instructions: 'Microwave and Enjoy', recipe_id: 3},
  ])
}