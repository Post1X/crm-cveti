const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('itemmeasure', {
    itemmeasureid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
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
    measureid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'measure',
        key: 'measureid'
      }
    },
    measure2id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'measure',
        key: 'measureid'
      }
    },
    value: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    area: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'itemmeasure',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_ITEMMEASURE",
        unique: true,
        fields: [
          { name: "itemmeasureid" },
        ]
      },
    ]
  });
};
