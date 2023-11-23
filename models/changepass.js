const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('changepass', {
    changepassid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    active: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'changepass',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_CHANGEPASS",
        unique: true,
        fields: [
          { name: "changepassid" },
        ]
      },
    ]
  });
};
