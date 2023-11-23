const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stocktostation', {
    stockid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'stock',
        key: 'stockid'
      }
    },
    stationid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'station',
        key: 'stationid'
      }
    }
  }, {
    sequelize,
    tableName: 'stocktostation',
    schema: 'public',
    timestamps: false
  });
};
