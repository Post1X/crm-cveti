const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stock', {
    stockid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    blocked: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stockgroupid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    importcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    avaliable: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    starttime: {
      type: DataTypes.TIME,
      allowNull: true
    },
    endtime: {
      type: DataTypes.TIME,
      allowNull: true
    },
    monday: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tuesday: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    wednesday: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    thursday: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    friday: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    saturday: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sunday: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    countbuy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    bouquet: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    discount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    clientgroupid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ispercent: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'stock',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_STOCK",
        unique: true,
        fields: [
          { name: "stockid" },
        ]
      },
    ]
  });
};
