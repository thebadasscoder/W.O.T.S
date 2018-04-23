'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    email_address: DataTypes.STRING,
    fullName: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};