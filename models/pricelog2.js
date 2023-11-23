const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pricelog2', {
    pricelogid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    itemid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    measureid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pricelistid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    oldprice: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    usersid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    docid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    comment: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pricelog2',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_PRICELOG2",
        unique: true,
        fields: [
          { name: "pricelogid" },
        ]
      },
    ]
  });
};
