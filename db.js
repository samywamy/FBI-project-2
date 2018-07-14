const pg = require('pg');
const url = require('url');

// Initialise postgres client
if( process.env.DATABASE_URL ){

  const params = url.parse(process.env.DATABASE_URL);
  const auth = params.auth.split(':');

  //make the configs object
  var config = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: true
  };

}else{

  var config = {
      user: 'samywamy',
      host: '127.0.0.1',
      database: 'recipe_db',
      port: 5432
  };
}

const pool = new pg.Pool(config);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

module.exports = pool;


