const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('discountitem', {
    discountitemid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    discountid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'discount',
        key: 'discountid'
      }
    },
    itemgroupid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'itemgroup',
        key: 'itemgroupid'
      }
    },
    importcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    avaliable: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'discountitem',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_DISCOUNTITEM",
        unique: true,
        fields: [
          { name: "discountitemid" },
        ]
      },
    ]
  });
};
