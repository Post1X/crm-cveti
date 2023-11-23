const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('price', {
    priceid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    pricelistid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'pricelist',
        key: 'pricelistid'
      }
    },
    itemid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'item',
        key: 'itemid'
      }
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    importcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    measureid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'measure',
        key: 'measureid'
      }
    },
    partitionid: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'price',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_PRICE",
        unique: true,
        fields: [
          { name: "priceid" },
        ]
      },
    ]
  });
};
