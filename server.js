const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const path = require('path');
const app = express();

var db
var appearance
var talents
var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
  }

const _port = 3000;
const cors = require('cors')

app.set('view engine', 'ejs')
app.use(express.static('./dist/npcgenerator'), bodyParser.urlencoded({extended: true}), cors(corsOptions))

MongoClient.connect('mongodb+srv://npcadmin:x5voktzB25hWtwOq@npcgenerator-hrw7r.mongodb.net/test?retryWrites=true&w=majority', { useUnifiedTopology: true }, (err, database) => {
  db = database.db('npcgenerator');
  appearance = db.collection('appearance');
  talents = db.collection('talent')
  races = db.collection('race')
  gender = db.collection('gender')
  femaleName = db.collection('femaleName')
  maleName = db.collection('maleName')
  highAbility = db.collection('highAbility')
  lowAbility = db.collection('lowAbility')
})

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname,'/dist/npcgenerator/index.html'));
});

app.get('/homepage', function(req,res) {
    res.sendFile(path.join(__dirname,'/dist/npcgenerator/index.html'));
});

app.get('/appearance', (req, res) => {
    appearance.find({}).toArray(function(err, result) {
        res.send(result)
    })
})

app.get('/talent', (req, res) => {
    talents.find({}).toArray(function(err, result) {
        res.send(result)
    })
})

app.get('/race', (req, res) => {
    races.find({}).toArray(function(err, result) {
        res.send(result)
    })
})

app.get('/gender', (req, res) => {
    gender.find({}).toArray(function(err, result) {
        res.send(result)
    })
})

app.get('/maleName', (req, res) => {
    maleName.find({}).toArray(function(err, result) {
        res.send(result)
    })
})

app.get('/femaleName', (req, res) => {
    femaleName.find({}).toArray(function(err, result) {
        res.send(result)
    })
})

app.get('/highAbility', (req, res) => {
    highAbility.find({}).toArray(function(err, result) {
        res.send(result)
    })
})

app.get('/lowAbility', (req, res) => {
    lowAbility.find({}).toArray(function(err, result) {
        res.send(result)
    })
})

app.listen(process.env.PORT || _port);