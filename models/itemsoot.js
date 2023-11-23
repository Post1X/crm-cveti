const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('itemsoot', {
    itemsootid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    importid: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    itemid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'item',
        key: 'itemid'
      }
    },
    integration: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'itemsoot',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_ITEMSOOT",
        unique: true,
        fields: [
          { name: "itemsootid" },
        ]
      },
    ]
  });
};
