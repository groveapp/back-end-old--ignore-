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
    database: 'dbgffg1nnn253r',
    password: config.DB_PASSWORD,
    omitNull: false,
    pool: {
        max: config.DB_POOL_SIZE,
        min: 1
    },
    dialectOptions: {
        ssl: { rejectUnauthorized: false } //process.env.NODE_ENV === 'development' ? 'allow' : 'require'
    },
    native: false,
    
    // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
    //operatorsAliases: false,

    logging: (
        config.LOGGING_DB ? (msg, sequelize) => console.log({sequelize}, msg) : false
    )
});
}
//npx sequelize-auto -h ec2-52-7-115-250.compute-1.amazonaws.com -d d2vus41esp5fhj -u bnbunfysjkxdbw -x a727ce396753f4b9826432ce9c604015c11ce567d0b02d62c3ad3ea5b37a8f77 -p 5432  --dialect postgres -o "./models"
module.exports = init;



