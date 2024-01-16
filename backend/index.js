const server = require('./src/server.js');
require("dotenv").config();
const { connection, testDbConnection } = require('./src/db/db.js');

// Syncing db
connection.sync({ force: false }).then(() => {
  server.listen(process.env.PORT, () => {
    console.log(`%s listening at ${process.env.PORT}`);
    testDbConnection()
  });
});