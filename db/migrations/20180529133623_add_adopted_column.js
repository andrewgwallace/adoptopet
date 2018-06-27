
exports.up = (knex, Promise) => {
  return knex.schema.table('puppies', t => {
    t.boolean('adopted', false);
  })
};

exports.down = (knex, Promise) => {
  return knex.schema.table('puppies', t => {
    t.dropColumn('adopted');
  })
};
