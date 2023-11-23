const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('xxx', {
    xxxid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'xxx',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_XXX",
        unique: true,
        fields: [
          { name: "xxxid" },
        ]
      },
    ]
  });
};
