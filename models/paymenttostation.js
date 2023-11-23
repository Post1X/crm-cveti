const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('paymenttostation', {
    paymenttostationid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    paymentid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    stationid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'paymenttostation',
    schema: 'public',
    timestamps: false
  });
};
