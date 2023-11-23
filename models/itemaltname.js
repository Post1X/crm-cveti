const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('itemaltname', {
    itemaltnameid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
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
    newname: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    value: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'itemaltname',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_ITEMALTNAME",
        unique: true,
        fields: [
          { name: "itemaltnameid" },
        ]
      },
    ]
  });
};
