const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('cashestopayment', {
    cashestopaymentid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    cashesid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'cashes',
        key: 'cashesid'
      }
    },
    paymentid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'payment',
        key: 'paymentid'
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
    tableName: 'cashestopayment',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_CASHESTOPAYMENT",
        unique: true,
        fields: [
          { name: "cashestopaymentid" },
        ]
      },
    ]
  });
};
