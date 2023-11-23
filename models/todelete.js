const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('todelete', {
    checkid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    orderid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    docid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    stationid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    storeid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    reload: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    moneydocid: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'todelete',
    schema: 'public',
    timestamps: false
  });
};
