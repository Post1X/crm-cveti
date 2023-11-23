const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('itemtag', {
    itemtagid: {
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
    tagid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tag',
        key: 'tagid'
      }
    },
    checkid: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'itemtag',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_ITEMTAG",
        unique: true,
        fields: [
          { name: "itemtagid" },
        ]
      },
    ]
  });
};
