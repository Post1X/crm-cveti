const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('printing', {
    printingid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    checkid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'checks',
        key: 'checkid'
      }
    },
    operationid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    stationid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'station',
        key: 'stationid'
      }
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'printing',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_PRINTING",
        unique: true,
        fields: [
          { name: "printingid" },
        ]
      },
    ]
  });
};
