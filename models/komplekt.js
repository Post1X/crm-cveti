const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('komplekt', {
    komplektid: {
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
    toitemid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'item',
        key: 'itemid'
      }
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
    service: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    modify: {
      type: DataTypes.INTEGER,
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
    stockid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    partitionid: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pricelistid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pricelist',
        key: 'pricelistid'
      }
    }
  }, {
    sequelize,
    tableName: 'komplekt',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_KOMPLEKT",
        unique: true,
        fields: [
          { name: "komplektid" },
        ]
      },
    ]
  });
};
