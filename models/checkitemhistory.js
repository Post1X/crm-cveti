const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('checkitemhistory', {
    checkitemhistoryid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    checkitemid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    checkid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    itemid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    subtotal: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    importcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    stationid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    bouquet: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    realprice: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    komplektcheckitemid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    stockid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    measureid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    partitionid: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    exported: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'checkitemhistory',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_CHECKITEMHISTORY",
        unique: true,
        fields: [
          { name: "checkitemhistoryid" },
        ]
      },
    ]
  });
};
