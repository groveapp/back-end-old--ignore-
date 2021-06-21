import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import logger from 'morgan';
import session from 'express-session';
import passport from 'passport';
import { routes } from './routes';

const app = express();

const supersecret = "democracyworks"
/* Setup CORS Headers & Options */
app.use(cors({ credentials: true, origin: ['http://localhost:3000', 'http://localhost:8080'] }));
/* Helmet is a HTTP header-security middleware */
app.use(helmet());
/* App should use Morgan's dev logger */
app.use(logger('dev'));
/* App should parse JSON and URLEncoded request bodies */
app.use(express.json({ strict: false }));
app.use(express.urlencoded({ extended: false }));
/* App should compress response bodies */
app.use(compression());
/* App should use & sign cookies */
app.use(cookieParser(supersecret));

/* Setup Express Session middleware */
app.use(
  session(
    {
      resave: false,
      saveUninitialized: true,
    },
  ),
);

app.use(passport.initialize());
app.use(passport.session());

// // Run our passport initialization
// require('./passport');

//Run config and sequalize setup
// require('./config')();
const { sequelize } = require('./Sequelize');
const { initModels } = require('./models/init-models');
initModels(sequelize);


import { WalkDirAndCollectJsFiles } from './utils/utils';


WalkDirAndCollectJsFiles(`${__dirname}/routes`).forEach((file) => {
    /* eslint-disable-next-line */
    const addFileRoutes = require(file).default;

    if (typeof addFileRoutes === 'function') {
        addFileRoutes(app);
    } else {
        /* eslint-disable-next-line no-console */
        console.log(`🚨 ${file} did not export a function to add routes 🚨`);
    }
});


/* Add routes to app */
// routes(app);

export default app;
