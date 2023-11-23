const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('stockitem', {
    stockitemid: {
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
    itemid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    importcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    itemgroupid: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'stockitem',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_STOCKITEM",
        unique: true,
        fields: [
          { name: "stockitemid" },
        ]
      },
    ]
  });
};
