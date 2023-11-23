const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('operation', {
    operationid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'operation',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_OPERATION",
        unique: true,
        fields: [
          { name: "operationid" },
        ]
      },
    ]
  });
};
