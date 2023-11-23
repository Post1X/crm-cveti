const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('docitemlog', {
    docitemid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    docid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    itemid: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    new: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    checkitemid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    importcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    exported: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    changeprice: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pricelistid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    frontprice: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    alarm: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    measureid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    partitionid: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    totalpallet: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    partitiontime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    realprice: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    discountid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    discountsum: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    clientdicsountsum: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    stockid: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'docitemlog',
    schema: 'public',
    timestamps: false
  });
};
