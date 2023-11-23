const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('measure', {
    measureid: {
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
    importcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'measure',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_MEASURE",
        unique: true,
        fields: [
          { name: "measureid" },
        ]
      },
    ]
  });
};
