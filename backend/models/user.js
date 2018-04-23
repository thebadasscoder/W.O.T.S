'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    email_address: DataTypes.STRING,
    fullName: DataTypes.STRING, 
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Photo),
    User.hasMany(models.Report)
  };
  return User;
};