'use strict';

// 3rd Party Resources


const { Sequelize, DataTypes } = require('sequelize');

// Prepare the express app


// Process JSON input and put the data on req.body


const sequelize = new Sequelize(process.env.DATABASE_URL || 'sqlite::memory:');

// Process FORM intput and put the data on req.body


// Create a Sequelize model
const Users = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = {
    Users: Users,
    db: sequelize,
};






// make sure our tables are created, start up the HTTP server.
