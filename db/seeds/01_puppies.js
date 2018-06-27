
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('puppies').del()
    .then(function () {
      // Inserts seed entries
      return knex('puppies').insert([
        {"name":"Ginger", "breed":"Black Lab", "weight":80, "adopted":true},
        {"name":"Buffy","breed":"mix","weight":68,"adopted":true},
        {"name":"Schatzi","breed":"mix","weight":40,"adopted":false},
        { "name": "Rocky", "breed": "German Shepherd", "weight": 85,"adopted": false},
        { "name": "Boo", "breed": "pomeranian", "weight": 20,"adopted": true}
      ]);
    });
};
