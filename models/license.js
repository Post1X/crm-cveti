const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('license', {
    licenseid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    pincode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    inn: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    manname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    demo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    progtype: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    hdd: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'license',
    schema: 'public',
    timestamps: false
  });
};
