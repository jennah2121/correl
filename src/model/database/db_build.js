const path = require('path');
const { QueryFile } = require('pg-promise');
const dbConnect = require('./db_connect.js');

const sql = file => QueryFile(path.join(__dirname, file), { minify: true });

const build = sql('./db_build.sql');

const runDbBuild = () => dbConnect
  .query(build);

// runDbBuild().catch(err => console.log(err));

module.exports = runDbBuild;
