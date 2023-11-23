const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pricehistory', {
    pricehistoryid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    itemid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'item',
        key: 'itemid'
      }
    },
    pricelistid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'pricelist',
        key: 'pricelistid'
      }
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    docid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'doc',
        key: 'docid'
      }
    },
    measureid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    basisprice: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    percent: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pricehistory',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_PRICEHISTORY",
        unique: true,
        fields: [
          { name: "pricehistoryid" },
        ]
      },
    ]
  });
};
