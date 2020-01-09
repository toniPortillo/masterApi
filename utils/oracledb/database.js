'use strict';
const oracledb = require('oracledb');
const config = require('config');
const dbConfig = config.get('app.database');

let connection;

module.exports = {
  getDb: async () => {
    try {
      connection = await oracledb.getConnection({
        user: `${dbConfig.user}`,
        password: `${dbConfig.password}`,
        connectString: `${dbConfig.host}: ${dbConfig.port}/${dbConfig.dbName}`
      })
      console.log("Successfully connected to Oracle!");
    }catch (err) {
      console.log("Error:", err)
    }finally {
      if (connection) {
        try {
          await connection.close();
        }catch (err) {
          console.log("Error when closing the database connection: ", err)
        }
      }
    }
  }
};

