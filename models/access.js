const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('access', {
    accessid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    foroffice: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'access',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_ACCESS",
        unique: true,
        fields: [
          { name: "accessid" },
        ]
      },
    ]
  });
};
