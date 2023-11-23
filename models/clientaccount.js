const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clientaccount', {
    clientaccountid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    discountpercent: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    bonuspercent: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    bonustotal: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    startpercent: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    endpercent: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    shiftpercent: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    shiftpercentsum: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    startbonus: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    endbonus: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    shiftbonus: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    shiftbonussum: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    nextdiscountsum: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    nextbonussum: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    importcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'clientaccount',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_CLIENTACCOUNT",
        unique: true,
        fields: [
          { name: "clientaccountid" },
        ]
      },
    ]
  });
};
