const Sequelize = require('sequelize');
const chalk = require('chalk');

//const sequelizeLogger = logger.child({component: 'sequelize'});


function init(config) {
console.log(chalk.blue('Using following config for database connection: '),config);
return  new Sequelize({
    dialect: 'postgres',
    host: config.DB_HOST,
    port: config.DB_PORT,
    username: config.DB_USERNAME,
    database: 'grove',
    password: config.DB_PASSWORD,
    omitNull: false,
    pool: {
        max: config.DB_POOL_SIZE,
        min: 1
    },
    dialectOptions: {
        ssl: false //process.env.NODE_ENV === 'development' ? 'allow' : 'require'
    },
    native: false,
    // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
    operatorsAliases: false,

    logging: (
        config.LOGGING_DB ? (msg, sequelize) => console.log({sequelize}, msg) : false
    )
});
}

module.exports = init;



