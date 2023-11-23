const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('store', {
    storeid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    itemid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'item',
        key: 'itemid'
      }
    },
    value: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    storesid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'stores',
        key: 'storesid'
      }
    },
    stationid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'station',
        key: 'stationid'
      }
    }
  }, {
    sequelize,
    tableName: 'store',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_STORE",
        unique: true,
        fields: [
          { name: "storeid" },
        ]
      },
    ]
  });
};
