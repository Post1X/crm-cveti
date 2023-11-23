const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cardpay', {
    cardpayid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    authcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    transtype: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    operationtype: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sum: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    cardnumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    slipnumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    transdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    transtime: {
      type: DataTypes.TIME,
      allowNull: true
    },
    msgnumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    terminalid: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    referencenumber: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    responsecode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    dayid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    kkmday: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sliptext: {
      type: DataTypes.STRING(3000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cardpay',
    schema: 'public',
    timestamps: false
  });
};
