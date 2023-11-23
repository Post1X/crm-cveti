const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('itemimage', {
    itemimageid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    itemid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'item',
        key: 'itemid'
      }
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    first: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    importcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    new: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    orderid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    trueimage: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    sended: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    link: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'itemimage',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_ITEMIMAGE",
        unique: true,
        fields: [
          { name: "itemimageid" },
        ]
      },
    ]
  });
};
