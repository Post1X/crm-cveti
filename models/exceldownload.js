const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('exceldownload', {
    exceldownloadid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    start: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    itemnamecol: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    itemidcol: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    measurecol: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    amountcol: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pricecol: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    totalcol: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    barcodecol: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    frontpricecol: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'exceldownload',
    schema: 'public',
    timestamps: false
  });
};
