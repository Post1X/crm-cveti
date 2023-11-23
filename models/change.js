const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('change', {
    changeid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'change',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_CHANGE",
        unique: true,
        fields: [
          { name: "changeid" },
        ]
      },
    ]
  });
};
