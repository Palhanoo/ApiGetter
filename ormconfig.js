/**@type{import('typeorm').ConnectionOptions}*/
const defaultConnectionOptions = {
  type: process.env.DATABASE_TYPE,
  url: process.env.DATABASE_URL,
  logging: false,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/**/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
  ssl:
    process.env.NODE_ENV === 'production'
      ? { rejectUnauthorized: false }
      : false,
  synchronize: false,
};

module.exports = defaultConnectionOptions;
