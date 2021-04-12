'use strict';

var path = require('path');
var http = require('http');
var https = require('https');

var oas3Tools = require('oas3-tools');
var serverPort = 8080;

const { Pool } = require('pg');

const pool = new Pool({
  connectionString: "postgres://username:password@link",
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
