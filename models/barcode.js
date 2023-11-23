const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('barcode', {
    barcodeid: {
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
    barcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    importcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    measureid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'measure',
        key: 'measureid'
      }
    },
    partitionid: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'barcode',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_BARCODE",
        unique: true,
        fields: [
          { name: "barcodeid" },
        ]
      },
    ]
  });
};
