const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('priceformula', {
    priceformulaid: {
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
    start: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    finish: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'priceformula',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_PRICEFORMULA",
        unique: true,
        fields: [
          { name: "priceformulaid" },
        ]
      },
    ]
  });
};
