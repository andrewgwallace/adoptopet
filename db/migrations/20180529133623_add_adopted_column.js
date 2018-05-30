
exports.up = (knex, Promise) => {
  return knex.schema.table('puppy', t => {
    t.boolean('adopted', false);
  })
};

exports.down = (knex, Promise) => {
  return knex.schema.table('puppy', t => {
    t.dropColumn('adopted');
  })
};
