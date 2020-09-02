const express = require('express');
const path = require('path');
// const connection = require('../database');

const app = express();
const PORT = 3000;

app.use(express.static('./public'));
app.use(express.json());
app.use('/bundle.js', express.static(path.resolve(__dirname, '../public/bundle.js')));
// app.use('/:id', express.static('./public'));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})