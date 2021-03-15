const express = require("express");

const initConfig = require('./config');
const chalk = require('chalk');
//const app = require('./app');
const initConnection = require('./sequelize');
const initControllers = require('./controllers');
const initModels = require('./models/init-models');


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

	//setup routes to controllers

	//bootstrap the app and listen
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
	console.log('newleader: ',newLeader.id);
})();

