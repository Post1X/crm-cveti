const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wish', {
    wishid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    wishgroupid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'wishgroup',
        key: 'wishgroupid'
      }
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    avaliable: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    usecomment: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'wish',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_WISH",
        unique: true,
        fields: [
          { name: "wishid" },
        ]
      },
    ]
  });
};
