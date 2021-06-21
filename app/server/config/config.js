require('dotenv-safe').config({
    allowEmptyValues: true,
  });

module.exports = {
    // development: {
    //     username: process.env.DB_USERNAME,
    //     password: process.env.DB_PASSWORD,
    //     database: process.env.DB_NAME,
    //     clientId: process.env.GOOGLE_CLIENT_ID,
    //     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    //     host: '127.0.0.1',
    //     port: 5432,
    //     dialect: 'postgres',
    // },
    development: {
        username: 'alex',
        password: null,
        database: 'testdb',
        host: '127.0.0.1',
        port: 5432,
        dialect: 'postgres',
        DB_POOL_SIZE: 20,
        LOGGING_DB: false
    },
    test: {
        username: 'test',
        password: null,
        database: 'testdb',
        host: '127.0.0.1',
        port: 5432,
        dialect: 'postgres',
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: '127.0.0.1',
        port: 5432,
        dialect: 'postgres',
    },
};
