
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        { "name":"teacup"},
        { "name": "small" },
        { "name": "medium" },
        { "name": "large" },
        { "name": "very large" }
      ]);
    });
};
