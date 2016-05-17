import { DB_TYPE } from '../config/serverConfig';
import { DB_TYPES } from '../config/constants';

let dbConfig = null;

/* use inline requires for conditional loading */
switch (DB_TYPE) {
  case DB_TYPES.MOCK:
    dbConfig = require('./mock');
    break;
  case DB_TYPES.DOCUMENTDB:
    dbConfig = require('./documentDb');
    break;
  default:
    throw new Error(`No database type '${DB_TYPE}' found`);
}

export const connect = dbConfig.connect;
export const controllers = dbConfig.controllers;
export const session = dbConfig.session;

export default dbConfig.default;
