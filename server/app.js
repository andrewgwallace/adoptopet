const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser')
const cors = require('cors');
const path = require("path");
const PORT = process.env.PORT || 3004
const listener = () => console.log(`Listening on port: ${PORT}`)
const knex = require("../db/knex");
const puppyRoute = require("./routes/puppies");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors());
app.use(logger('dev'));

app.use('/api/puppies', puppyRoute );

// handle error
app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({ error: err })
})
// not found
app.use((req, res, next) => {
  res.status(404).json({ error: { message: "Not found." } })
})

app.listen(PORT, listener);