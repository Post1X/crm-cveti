const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('userspercent', {
    userpercentsid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    usersid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'users',
        key: 'usersid'
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
    itemgroupid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'itemgroup',
        key: 'itemgroupid'
      }
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
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    orders: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'userspercent',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_USERPERCENTS",
        unique: true,
        fields: [
          { name: "userpercentsid" },
        ]
      },
    ]
  });
};
