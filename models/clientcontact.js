const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clientcontact', {
    clientcontactid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    clientid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    typecontact: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    value: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    isdefault: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'clientcontact',
    schema: 'public',
    timestamps: false
  });
};
