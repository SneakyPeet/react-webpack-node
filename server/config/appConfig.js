import { DB_TYPES } from './constants';

export const DB_TYPE = process.env.DB_TYPE || DB_TYPES.MOCK;
export const ENV = process.env.NODE_ENV || 'development';
