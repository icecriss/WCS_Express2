const express = require('express');
const app = express();
const port = 3000;
const connection = require('./conf');


app.get('/api/movies', (req, res) => {


  connection.query('SELECT * from movies', (err, results) => {

    if (err) {

      res.status(500).send('Erreur lors de la récupération des films');
    } else {


      res.json(results);
    }
  });
});

app.get('/api/movies/names', (req, res) => {

  connection.query('SELECT names from movies', (err, results) => {

    if (err) {


      res.status(500).send('Erreur lors de la récupération du nom des films');
    } else {

      res.json(results);
    }
  });
});

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});

