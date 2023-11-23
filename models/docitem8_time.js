const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('docitem8_time', {
    docitem: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    itemid: {
      type: DataTypes.BIGINT,
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
    total: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    realamount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    importcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    docid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    realprice: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    realtotal: {
      type: DataTypes.DECIMAL,
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
    partitiontime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    amountbouquet: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    totalbouquet: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    frontprice: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    fronttotal: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    updated: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    itemcomment: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    frontrealtotal: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    frontrashtotal: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'docitem8_time',
    schema: 'public',
    timestamps: false
  });
};
