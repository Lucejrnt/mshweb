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
  motos.find({}) //We get all the motos
    .project({power : 1, _id : 0}) //We only keep the power values, and remove the ids
    .toArray((err, res) => {
      response.send(res);
      //You might want to sort the values
  });
});

app.get('/maxtorque', (request, response) => {
  console.log('I received a get request. Now querying the database');
  // querying the database and putting the results in the http response
  motos.find({}) //We get all the motos
    .project({maxtorque : 1, _id : 0}) //We only keep the power values, and remove the ids
    .toArray((err, res) => {
      response.send(res);
      //You might want to sort the values
  });
});

app.get('/maxtorquerpm', (request, response) => {
  console.log('I received a get request. Now querying the database');
  // querying the database and putting the results in the http response
  motos.find({}) //We get all the motos
    .project({maxtorquerpm : 1, _id : 0}) //We only keep the power values, and remove the ids
    .toArray((err, res) => {
      response.send(res);
      //You might want to sort the values
  });
});

app.get('/strokenb', (request, response) => {
  console.log('I received a get request. Now querying the database');
  // querying the database and putting the results in the http response
  motos.find({}) //We get all the motos
    .project({strokenb : 1, _id : 0}) //We only keep the power values, and remove the ids
    .toArray((err, res) => {
      response.send(res);
      //You might want to sort the values
  });
});

app.get('/strokecm', (request, response) => {
  console.log('I received a get request. Now querying the database');
  // querying the database and putting the results in the http response
  motos.find({}) //We get all the motos
    .project({stroquecm : 1, _id : 0}) //We only keep the power values, and remove the ids
    .toArray((err, res) => {
      response.send(res);
      //You might want to sort the values
  });
});

app.get('/architecture', (request, response) => {
  console.log('I received a get request. Now querying the database');
  // querying the database and putting the results in the http response
  motos.find({}) //We get all the motos
    .project({architecture : 1, _id : 0}) //We only keep the power values, and remove the ids
    .toArray((err, res) => {
      response.send(res);
      //You might want to sort the values
  });
});

app.listen(process.env.PORT || serverPort);
