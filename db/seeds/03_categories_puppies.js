
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories_puppies').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories_puppies').insert([
        {puppy_id: 1, category_id: 3},
        { puppy_id: 2, category_id: 1},
        { puppy_id: 3, category_id: 5 },
        { puppy_id: 4, category_id: 2 },
        { puppy_id: 5, category_id: 4 },
      ]);
    });
};
