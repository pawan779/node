const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('node1', 'root', 'pleiades', {
  host: 'localhost',
  dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  // logging: false
});
sequelize
  .authenticate() //returns promise state: pending/result/rejected
//   .then(() => { //promise handler result
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => { //promise handler reject
//     console.error('Unable to connect to the database:', err);
//   });

  .then(function(result){
  })
  .catch(function(err){
  })