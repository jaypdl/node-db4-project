exports.seed = function (knex) {
  return knex('ingredients').insert([
    { ingredient_name: 'Oats'},
    { ingredient_name: 'Milk'},
    { ingredient_name: 'Egg'},
    { ingredient_name: 'Pancake Powder'},
    { ingredient_name: 'Frozen Pizza'}
  ])
}