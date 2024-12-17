export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV,
  db_host: process.env.DB_HOST,
  db_port: +process.env.DB_PORT,
  database: process.env.DB_NAME,
  db_username: process.env.DB_USERNAME,
  db_password: process.env.DB_PASSWORD,
  seed_email: process.env.SEED_EMAIL,
  seed_password: process.env.SEED_PASSWORD,
});
