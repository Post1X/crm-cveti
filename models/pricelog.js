const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('pricelog', {
    pricelogid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    pricelistid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'pricelist',
        key: 'pricelistid'
      }
    },
    itemid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'item',
        key: 'itemid'
      }
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
      type: DataTypes.STRING(100),
      allowNull: true
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    starttime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    endtime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pricelog',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_PRICELOG",
        unique: true,
        fields: [
          { name: "pricelogid" },
        ]
      },
    ]
  });
};
