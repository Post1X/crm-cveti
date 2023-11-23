const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('aeroflottransaction', {
    aeroflottransactionid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    checkid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    card: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    surname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pin: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nonce: {
      type: DataTypes.STRING(109),
      allowNull: true
    },
    transactionid: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    transactiontime: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    sliptext: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    totalmiles: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    transtype: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    retcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'aeroflottransaction',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_AEROFLOT",
        unique: true,
        fields: [
          { name: "aeroflottransactionid" },
        ]
      },
    ]
  });
};
