
exports.up = function(knex, Promise) {
  return knex.schema.createTable('puppies', t => {
    t.increments();
    t.string('name');
    t.string('breed');
    t.integer('weight');
    t.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('puppies');
};
