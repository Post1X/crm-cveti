const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ordercomment', {
    ordercommentid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    orderid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'orders',
        key: 'orderid'
      }
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    exported: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    seen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ordercomment',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_ORDERCOMMENT",
        unique: true,
        fields: [
          { name: "ordercommentid" },
        ]
      },
    ]
  });
};
