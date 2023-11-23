const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('newversion', {
    newversionid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    stationid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    newversion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'newversion',
    schema: 'public',
    timestamps: false
  });
};
