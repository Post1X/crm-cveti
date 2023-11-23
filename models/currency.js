const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('currency', {
    currencyid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    shrtname: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'currency',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_CURRENCY",
        unique: true,
        fields: [
          { name: "currencyid" },
        ]
      },
    ]
  });
};
