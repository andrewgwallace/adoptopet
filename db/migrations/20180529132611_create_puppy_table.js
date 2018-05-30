
exports.up = function(knex, Promise) {
  return knex.schema.createTable('puppy', t => {
    t.increments();
    t.string('name');
    t.string('breed');
    t.integer('weight');
    t.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('puppy');
};
