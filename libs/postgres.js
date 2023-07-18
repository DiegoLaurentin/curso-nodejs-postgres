const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'userpostgres',
    password: 'userpostgres',
    database: 'my_store_postgres',
  })

  await client.connect();
  return client;
}

module.exports = getConnection;
