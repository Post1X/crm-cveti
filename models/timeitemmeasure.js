const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('timeitemmeasure', {
    itemid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    measureid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    value: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    operation: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    measure2id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    name2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    itemmeasureid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    area: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'timeitemmeasure',
    schema: 'public',
    timestamps: false
  });
};
