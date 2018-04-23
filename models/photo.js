'use strict';
module.exports = (sequelize, DataTypes) => {
  var Photo = sequelize.define('Photo', {
    url: DataTypes.STRING,
    match: DataTypes.INTEGER
  }, {});
  Photo.associate = function(models) {
    // associations can be defined here
  };
  return Photo;
};