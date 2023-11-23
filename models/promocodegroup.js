const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('promocodegroup', {
    promocodegroupid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    buyfromitemgroupid: {
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
    active: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
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
    discountvalue: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    discounttype: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    autogenerate: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    promoprefix: {
      type: DataTypes.INTEGER,
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
    tableName: 'promocodegroup',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_PROMOGROUP",
        unique: true,
        fields: [
          { name: "promocodegroupid" },
        ]
      },
    ]
  });
};
