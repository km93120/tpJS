const express = require('express');
const bodyParser = require('body-parser');
const rp = require('request-promise');

const app = express();
app.use(bodyParser.json());

app.post('/vilains', (req, res) => {
  if (req.body.countV === 0) {
    console.log('');
  } else {
    console.log('Vilain pas beau apparu à ' + req.body.cityV.name);
  }
  console.log('');
  // Empeche le bug de la disparition de la dernière instruction !
  // Attention potentiel probleme à venir...

  const options = {method: 'POST', url: process.env.HEROS_URL, headers:
      {'Content-Type': 'application/json'}, json: true, body: req.body
  };

  rp(options);

  res.end('hello');
});

app.listen(5002, () => {
  console.log('app listening on port 5002!');
});
