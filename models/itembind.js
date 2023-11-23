const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('itembind', {
    itembindid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    toitemid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    itemid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'itembind',
    schema: 'public',
    timestamps: false
  });
};
