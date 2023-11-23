const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orderwish', {
    orderid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    wishid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    comment: {
      type: DataTypes.STRING(2000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'orderwish',
    schema: 'public',
    timestamps: false
  });
};