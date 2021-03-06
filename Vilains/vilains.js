const express = require('express');
const bodyParser = require('body-parser');
const rp = require('request-promise');

const app = express();
app.use(bodyParser.json());

const countV = 0;
const city = [
  {name: 'Paris', coordinates: {latitude: 48, longitude: 2}},
  {name: 'Marseille', coordinates: {latitude: 43, longitude: 5}},
  {name: 'Nice', coordinates: {latitude: 43, longitude: 7}}
];
const random = 0;

const apparition = {
  city,
  cityV: city[random],
  countV
};

const options = {
  method: 'POST',
  url: process.env.TRACKEUR_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  json: true,
  body: apparition
};

app.post('/vilains', (req, res) => {
  console.log(req.body.start);
  rp(options);

  // Timer des requetes
  setInterval(async () => {
    apparition.countV = Math.floor(Math.random() * Math.floor(100));
    apparition.cityV = city[Math.floor(
      Math.random() * Math.floor(city.length))];
    // Console.log("enemy says  : " + apparition.cityV.name)
    await rp(options);
  }, 5000);
  console.log('');
  res.end('hello');
});

app.listen(5001, () => {
  console.log('app listening on port 5001!');
});
