const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('itembox', {
    itemboxid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    itemid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'item',
        key: 'itemid'
      }
    },
    boxid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'box',
        key: 'boxid'
      }
    },
    value: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'itembox',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_ITEMBOX",
        unique: true,
        fields: [
          { name: "itemboxid" },
        ]
      },
    ]
  });
};
