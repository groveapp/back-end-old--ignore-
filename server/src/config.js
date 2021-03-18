// This function will read the config files in the config folder
// based on the procss.NODE.ENV variable. E.g process.env.NODE_ENV = dev 
// will read the config-dev.json

const chalk = require('chalk');
const path = require('path');

module.exports = function() {
	const environment = process.env.NODE_ENV;

	if(!environment) {
		console.log(chalk.red('The process.env.NODE_ENV not defined'));
		process.exit(1);
	}

	console.log('Current environment context ',environment);

	//Read config file
	const filename = path.join('../config',environment+'.json');
	console.log(chalk.blue('Accessing config file ', filename));
	
	const content = require(filename);

	console.log(content);

	return content;
}