const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usersgrouppercent', {
    usersgrouppercentid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    usersgroupid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'usersgroup',
        key: 'usersgroupid'
      }
    },
    sale: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bouquet: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    itemid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'item',
        key: 'itemid'
      }
    },
    percent: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    itemgroupid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'itemgroup',
        key: 'itemgroupid'
      }
    },
    orders: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'usersgrouppercent',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_USERSGROUPPERCENT",
        unique: true,
        fields: [
          { name: "usersgrouppercentid" },
        ]
      },
    ]
  });
};
