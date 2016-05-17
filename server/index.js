import express from 'express';
import webpack from 'webpack';
import { ENV } from './config/serverConfig';
import { connect as connectDatabase } from './db';
import expressConfig from './config/express';
import routesConfig from './config/routes';
import webpackDevConfig from '../webpack/webpack.config.dev-client';
const App = require('../public/assets/server');
const app = express();

/*
 * Database-specific setup
 */
connectDatabase();

if (ENV === 'development') {
  const compiler = webpack(webpackDevConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackDevConfig.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

expressConfig(app);
routesConfig(app);

/*
 * This is where the magic happens. We take the locals data we have already
 * fetched and seed our stores with data.
 * App is a function that requires store data and url
 * to initialize and return the React-rendered html string
 */
app.get('*', App.default);
app.listen(app.get('port'));
