const express = require('express');
const app = express();
const logger = ('morgan');
const bodyParser = require('body-parser')
const cors = require('cors');
const path = require("path");
const PORT = process.env.PORT || 3004
const listener = () => console.log(`Listening on port: ${PORT}`)
const knex = require("../db/knex");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors());

app.get("/", (req, res, next) => {
  const index = path.join(__dirname, "../ui/build/index.html");
  res.sendFile(index);
});

app.get('/api/puppies', (req, res, next) => {
  knex('puppy')
  .then(puppies => res.json({puppies: puppies}))
  .catch(error => { console.error(error); })
})
app.listen(PORT, listener);