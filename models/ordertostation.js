const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ordertostation', {
    ordertostationid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    orderid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'orders',
        key: 'orderid'
      }
    },
    stationid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'station',
        key: 'stationid'
      }
    },
    type: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ordertostation',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FK_ORDERTOSTATION",
        unique: true,
        fields: [
          { name: "ordertostationid" },
        ]
      },
    ]
  });
};
