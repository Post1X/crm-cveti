const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('timekomplekt', {
    timekomplektid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    itemid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'item',
        key: 'itemid'
      }
    },
    toitemid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'item',
        key: 'itemid'
      }
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    subtotal: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'timekomplekt',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_TIMEKOMPLEKT",
        unique: true,
        fields: [
          { name: "timekomplektid" },
        ]
      },
    ]
  });
};
