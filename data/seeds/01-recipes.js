exports.seed = function (knex) {
  return knex('recipes').insert([
    { recipe_name: 'Pancakes'},
    { recipe_name: 'Pizza'},
    { recipe_name: 'Oatmeal'},
  ])
}
