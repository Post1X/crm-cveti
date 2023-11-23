const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('promocode', {
    promocodeid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    promo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    endtime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    discountid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'discount',
        key: 'discountid'
      }
    },
    buyfromitemgroup: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'itemgroup',
        key: 'itemgroupid'
      }
    },
    buytotal: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    useinitemgroupid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'itemgroup',
        key: 'itemgroupid'
      }
    },
    discountvaoue: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    discounttype: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    createcomment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    usedcomment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    importcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    active: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    promocodegroupid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'promocodegroup',
        key: 'promocodegroupid'
      }
    },
    discountvalue: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    itemcount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 1
    },
    buytouse: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'promocode',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_PROMO",
        unique: true,
        fields: [
          { name: "promocodeid" },
        ]
      },
    ]
  });
};
