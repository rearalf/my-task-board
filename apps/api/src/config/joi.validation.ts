import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  NODE_ENV: Joi.string().default('dev'),
  PORT: Joi.number().default(3000),
  DB_HOST: Joi.string().default('localhost'),
  DB_NAME: Joi.string().default('database-example'),
  DB_USERNAME: Joi.string().default('root'),
  DB_PASSWORD: Joi.string().default('root'),
  DB_PORT: Joi.number().default(5432),
});
