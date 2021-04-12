'use strict';

var path = require('path');
var http = require('http');
//var https = require('https');

var serverPort = process.env.PORT || 8080;

const express = require("express");

const initConfig = require('./config');
const chalk = require('chalk');
//const app = require('./app');
const initConnection = require('./Sequelize');
const initControllers = require('./controllers');
const initModels = require('./models/init-models');
const initRoutes = require('./routes');


(async function() {
	//pull in the config settings
	const config = await initConfig();

	//create logger
	const logger = {};

	//setup sequelize
	const sequelize = await initConnection(config);

	//connect to db
	await sequelize.authenticate();

	//initialize models
	const dbModels = await initModels(sequelize);

	//setup controllers
	const controllers = await initControllers(logger, dbModels);


	//bootstrap the app and listen

	const server = express();
	server.use(express.json());


	//setup routes to controllers
	const routes = await initRoutes(server,controllers);

	server.use('/api', routes);
	server.listen(serverPort, () => console.log(`Listening on ${ serverPort }`));

	//await app(controllers);

	//Test queries
	console.log(chalk.red('Testing models...'));
    const leader = dbModels.Leader;

	const leaders = await leader.findAll();
 	leaders.every( v => {
		console.log(v.id, ',', v.firstname);
	});	

	const newLeader = await dbModels.Leader.create( {
		id: Math.floor(Math.random()*100000),
		firstname: "leader1",
		lastname: "leader1lastname",
		honorific: "vice president",
		approvals: 2000000,
		disapprovals: 0,
		approvalrating: 5.0
		});
	console.log('newleader: ', newLeader.id);

})();
