const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let score = 0;
let cityH = {name: 'Paris', coordinates: {latitude: 48, longitude: 2}};

let speed = 0;
let mountStamina = 0;

const distance = (heroLat, heroLong, cityLat, cityLong) => {
  const deltaX = Math.pow(heroLat - cityLat, 2);
  const deltaY = Math.pow(heroLong - cityLong, 2);

  return Math.sqrt(Math.abs(deltaX - deltaY));
};

app.post('/licornes', (req, res) => {
  speed = 1;
  mountStamina = 2;
  console.log('licorne enfourchée !');
  res.end('hello');
});

app.post('/vilains', (req, res) => {
  const x1 = cityH.coordinates.latitude;
  const x2 = cityH.coordinates.longitude;
  const y1 = req.body.cityV.coordinates.latitude;
  const y2 = req.body.cityV.coordinates.longitude;
  // Console.log({x1, x2, y1, y2});
  // console.log(distance(x1, x2, y1, y2));
  if (cityH.name === req.body.cityV.name) {
    score += req.body.countV;
    if (req.body.countV === 0) {
      console.log('');
    } else {
      console.log('Ok t\'es mort !! J\'ai actuellement ' +
        score + ' victimes à mon compte');
    }
  } else {
    setTimeout(() => {
      cityH = req.body.cityV; // The hero goes to the city, mount loses stamina
      mountStamina -= 1;
      if (mountStamina === 0) {
        speed = 0.1;
        console.log('licorne a plat..');
      }
      score += req.body.countV;
      console.log('mountStamina:' + mountStamina);
      console.log('Coucou je suis à ' + cityH.name +
        ' ! Et j\'ai actuellement ' +
        score + ' victimes à mon compte');
    }, 100 * distance(x1, x2, y1, y2) / speed);
  }
  console.log('');
  // Empeche le bug de la disparition de la dernière instruction !
  // Attention potentiel probleme à venir...
  res.end('hello');
});

app.listen(5000, () => {
  console.log('app listening on port 5000!');
});
