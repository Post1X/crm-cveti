const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('discounttostation', {
    discountid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'discount',
        key: 'discountid'
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
    tableName: 'discounttostation',
    schema: 'public',
    timestamps: false
  });
};
