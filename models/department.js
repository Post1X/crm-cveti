const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('department', {
    departmentid: {
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
    maket: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    printer: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'department',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_DEPARTMENTID",
        unique: true,
        fields: [
          { name: "departmentid" },
        ]
      },
    ]
  });
};
