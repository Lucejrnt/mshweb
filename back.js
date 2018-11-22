'use strict';

var fs = require('fs'),
    path = require('path'),
    http = require('http');

const express = require('express');
const app = new express();
const JSON = require('json-parser');

var serverPort = 8080;

//database
const MongoClient = require('mongodb').MongoClient;

// Connection URL to mlab
const url = 'mongodb://tmp:tmptmp1@ds039311.mlab.com:39311/motowebdb';

// Database Name
const dbName = 'motowebdb';
var db;
var motos;
var power;
var maxtorque;
var maxtorquerpm;
var strokenb;
var strokecm;
var architecture;
var collectionPower;

//Connection to mongodb database
MongoClient.connect(url, function(err, client) {
  if (client != null) {
    console.log("Connected successfully to server");
    db = client.db(dbName);
    motos = db.collection('motorbikes');
    // collectionPuissance = db.collection('puissances');
    if (motos == null) {
      console.log("Could not find the collection motos");
    }
  } else {
    console.log("could not connect to the database");
  }
});

//adds the html and css files to the context
app.use(express.static("."));

//returns the main reactive page when the right url is quire
app.get('/', function(request, response){
    response.sendFile('index.html');
});

app.get('/motos', (request, response) => {
  console.log('I received a get request. Now querying the database');
  // querying the database and putting the results in the http response
  motos.find({}).toArray(function(err, res)  {
    response.send(res);
  });
});

app.get('/power', (request, response) => {
  console.log('I received a get request. Now querying the database');
  // querying the database and putting the results in the http response
  motos.distinct("power", function(err, data) {
    response.send(data.sort());
  });
});

app.get('/maxtorque', (request, response) => {
  console.log('I received a get request. Now querying the database');
  // querying the database and putting the results in the http response
  motos.distinct("maxtorque", function(err, data) {
    response.send(data.sort());
  });
});

app.get('/maxtorquerpm', (request, response) => {
  console.log('I received a get request. Now querying the database');
  // querying the database and putting the results in the http response
  motos.distinct("maxtorquerpm", function(err, data) {
    response.send(data.sort());
  });
});

app.get('/strokenb', (request, response) => {
  console.log('I received a get request. Now querying the database');
  // querying the database and putting the results in the http response
  motos.distinct("strokenb", function(err, data) {
    response.send(data.sort());
  });
});

app.get('/strokecm', (request, response) => {
  console.log('I received a get request. Now querying the database');
  // querying the database and putting the results in the http response
  motos.distinct("strokecm", function(err, data) {
    response.send(data.sort());
  });
});

app.get('/architecture', (request, response) => {
  console.log('I received a get request. Now querying the database');
  // querying the database and putting the results in the http response
  motos.distinct("architecture", function(err, data) {
    response.send(data.sort());
  });
});

app.get('/equipment', (request, response) => {
  console.log('I received a get request. Now querying the database');
  // querying the database and putting the results in the http response
  motos.distinct("equipment", function(err, data) {
    response.send(data.sort());
  });
});

app.get('/frontbrake', (request, response) => {
  console.log('I received a get request. Now querying the database');
  // querying the database and putting the results in the http response
  motos.distinct("frontbrake", function(err, data) {
    response.send(data.sort());
  });
});

app.get('/rearbrake', (request, response) => {
  console.log('I received a get request. Now querying the database');
  // querying the database and putting the results in the http response
  motos.distinct("rearbrake", function(err, data) {
    response.send(data.sort());
  });
});

app.get('/tires', (request, response) => {
  console.log('I received a get request. Now querying the database');
  // querying the database and putting the results in the http response
  motos.distinct("tires", function(err, data) {
    response.send(data.sort());
  });
});

app.get('/weight', (request, response) => {
  console.log('I received a get request. Now querying the database');
  // querying the database and putting the results in the http response
  motos.distinct("weight", function(err, data) {
    response.send(data.sort());
  });
});

app.get('/handlebar', (request, response) => {
  console.log('I received a get request. Now querying the database');
  // querying the database and putting the results in the http response
  motos.distinct("handlebar", function(err, data) {
    response.send(data.sort());
  });
});

app.get('/frame', (request, response) => {
  console.log('I received a get request. Now querying the database');
  // querying the database and putting the results in the http response
  motos.distinct("frame", function(err, data) {
    response.send(data.sort());
  });
});

app.get('/frontwheel', (request, response) => {
  console.log('I received a get request. Now querying the database');
  // querying the database and putting the results in the http response
  motos.distinct("frontwheel", function(err, data) {
    response.send(data.sort());
  });
});

app.get('/rearwheel', (request, response) => {
  console.log('I received a get request. Now querying the database');
  // querying the database and putting the results in the http response
  motos.distinct("rearwheel", function(err, data) {
    response.send(data.sort());
  });
});

app.get('/type', (request, response) => {
  console.log('I received a get request. Now querying the database');
  // querying the database and putting the results in the http response
  motos.distinct("type", function(err, data) {
    response.send(data.sort());
  });
});

app.get('/style', (request, response) => {
  console.log('I received a get request. Now querying the database');
  // querying the database and putting the results in the http response
  motos.distinct("style", function(err, data) {
    response.send(data.sort());
  });
});

app.get('/coloris', (request, response) => {
  console.log('I received a get request. Now querying the database');
  // querying the database and putting the results in the http response
  motos.distinct("coloris", function(err, data) {
    response.send(data.sort());
  });
});

app.get('/suspension', (request, response) => {
  console.log('I received a get request. Now querying the database');
  // querying the database and putting the results in the http response
  motos.distinct("suspension", function(err, data) {
    response.send(data.sort());
  });
});

app.get('/position', (request, response) => {
  console.log('I received a get request. Now querying the database');
  // querying the database and putting the results in the http response
  motos.distinct("position", function(err, data) {
    response.send(data.sort());
  });
});

app.get('/seatheight', (request, response) => {
  console.log('I received a get request. Now querying the database');
  // querying the database and putting the results in the http response
  motos.distinct("seatheight", function(err, data) {
    response.send(data.sort());
  });
});

app.get('/duo', (request, response) => {
  console.log('I received a get request. Now querying the database');
  // querying the database and putting the results in the http response
  motos.distinct("duo", function(err, data) {
    response.send(data.sort());
  });
});

app.get('/windprotection', (request, response) => {
  console.log('I received a get request. Now querying the database');
  // querying the database and putting the results in the http response
  motos.distinct("windprotection", function(err, data) {
    response.send(data.sort());
  });
});

app.get('/confortaccessories', (request, response) => {
  console.log('I received a get request. Now querying the database');
  // querying the database and putting the results in the http response
  motos.distinct("confortaccessories", function(err, data) {
    response.send(data.sort());
  });
});

app.get('/homemadeservice', (request, response) => {
  console.log('I received a get request. Now querying the database');
  // querying the database and putting the results in the http response
  motos.distinct("homemadeservice", function(err, data) {
    response.send(data.sort());
  });
});

app.get('/transformations', (request, response) => {
  console.log('I received a get request. Now querying the database');
  // querying the database and putting the results in the http response
  motos.distinct("transformations", function(err, data) {
    response.send(data.sort());
  });
});




app.listen(process.env.PORT || serverPort);
