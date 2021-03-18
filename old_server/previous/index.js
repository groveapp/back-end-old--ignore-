'use strict';

var path = require('path');
var http = require('http');
var https = require('https');

var oas3Tools = require('oas3-tools');
var serverPort = 8080;

const { Pool } = require('pg');

//"dbname=d2vus41esp5fhj host=ec2-52-7-115-250.compute-1.amazonaws.com port=5432 user=bnbunfysjkxdbw password=a727ce396753f4b9826432ce9c604015c11ce567d0b02d62c3ad3ea5b37a8f77 sslmode=require"
//postgres://bnbunfysjkxdbw:a727ce396753f4b9826432ce9c604015c11ce567d0b02d62c3ad3ea5b37a8f77@ec2-52-7-115-250.compute-1.amazonaws.com:5432/d2vus41esp5fhj

const pool = new Pool({
  connectionString: "postgres://bnbunfysjkxdbw:a727ce396753f4b9826432ce9c604015c11ce567d0b02d62c3ad3ea5b37a8f77@ec2-52-7-115-250.compute-1.amazonaws.com:5432/d2vus41esp5fhj",
  //process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false } //process.env.DATABASE_URL ? true : false
});


// swaggerRouter configuration
var options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    },
};

var expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
var app = expressAppConfig.getApp();


const express = require('express');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/db', async (req, res) => {
    try {
      const client = await pool.connect();
      console.log("connection made")
      const result = await client.query('SELECT name FROM "Test" WHERE id=124');
      const results = { 'results': (result) ? result.rows : null};
      console.log("results achieved:")
      console.log(results)
      res.render('pages/db', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
  .listen(serverPort, () => console.log(`Listening on ${ serverPort }`));