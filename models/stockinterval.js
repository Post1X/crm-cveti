const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('stockinterval', {
    stockintervalid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    stockid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'stock',
        key: 'stockid'
      }
    },
    starts: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ends: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    importcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pricelistid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    percent: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'stockinterval',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_STOCKINTERVAL",
        unique: true,
        fields: [
          { name: "stockintervalid" },
        ]
      },
    ]
  });
};
