const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('storemove', {
    storemoveid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    itemid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    storeid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'stores',
        key: 'storesid'
      }
    },
    time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    docitemid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'docitem',
        key: 'docitemid'
      }
    },
    realtime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cost: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    partitionid: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    partitiontime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'storemove',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_STOREMOVE",
        unique: true,
        fields: [
          { name: "storemoveid" },
        ]
      },
    ]
  });
};
