const express = require('express');
const router = express.Router();
const knex = require('../../db/knex')

router.get("/", (req, res, next) => {
  const index = path.join(__dirname, "../client/build/index.html");
  console.log(index);
  res.sendFile(index);
});

router.get('/api/puppies', (req, res, next) => {
  knex('puppy')
    .then(puppies => res.json({ puppies: puppies }))
    .catch(error => { console.error(error); })
})

module.exports = router;