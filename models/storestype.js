const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('storestype', {
    storestypeid: {
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
    tableName: 'storestype',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_STORESTYPE",
        unique: true,
        fields: [
          { name: "storestypeid" },
        ]
      },
    ]
  });
};
