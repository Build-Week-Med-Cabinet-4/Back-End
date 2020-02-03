module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/auth.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations',
    },
    seeds: {
      directory: './database/seeds'
    },
    pool: {
      afterCreate: (connect, done) => {
        connect.run("PRAGMA foreign_keys = ON", done)
      },
    },
  },

  staging: {
    client: 'sqlite3',
    connection: {
      filename: './database/auth.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations',
    },
    seeds: {
      directory: './database/seeds'
    },
    pool: {
      afterCreate: (connect, done) => {
        connect.run("PRAGMA foreign_keys = ON", done)
      },
    },
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: './database/auth.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations',
    },
    seeds: {
      directory: './database/seeds'
    },
    pool: {
      afterCreate: (connect, done) => {
        connect.run("PRAGMA foreign_keys = ON", done)
      },
    },
  },
};
