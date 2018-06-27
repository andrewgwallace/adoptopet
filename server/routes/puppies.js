const express = require('express');
const router = express.Router();
const knex = require('../../db/knex')

router.get('/', (req, res, next) => {
  knex('puppies')
    .then(puppies => res.json({ puppies: puppies }))
    .catch(error => { console.error(error); })
})

module.exports = router;