
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('categories_puppies', function(table) {
      table.increments();
      table.integer('puppy_id').references('puppies.id');
      table.integer('category_id').references('categories.id');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('categories_puppies')
  ])
};
