const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('storemove_time', {
    storemoveid: {
      type: DataTypes.BIGINT,
      allowNull: true
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
      allowNull: true
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
      allowNull: true
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
    tableName: 'storemove_time',
    schema: 'public',
    timestamps: false
  });
};
