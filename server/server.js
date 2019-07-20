
var convert = require('xml-js');
var xml = require('fs').readFileSync(__dirname +'/flighdata_A.xml', 'utf8');
var value = {compact: true};
var flights = convert.xml2js(xml, value);

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

// var js = JSON.parse(value);

app.use(bodyParser.json());

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('traveltek');
    const flightsCollection = db.collection('flights');
    flightsCollection.insertMany(json.flights.flight);
});

    app.get('/', function (req, res){
      res.send(JSON.stringify(flights.flights.flight))
  });

 // .catch(console.err);
 app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
