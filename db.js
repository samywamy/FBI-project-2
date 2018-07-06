const pg = require('pg');

// Initialise postgres client
const config = {
  user: 'samywamy',
  host: '127.0.0.1',
  database: 'recipe_db',
  port: 5432,
};

const pool = new pg.Pool(config);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

module.exports = pool;