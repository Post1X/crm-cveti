const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('day', {
    dayid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    opentime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    closetime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    checks: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    stationid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    exported: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    importcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    openby: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'users',
        key: 'usersid'
      }
    },
    closeby: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'usersid'
      }
    },
    number: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fiscalnumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sliptext: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    exportedto1c: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    realstationid: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'day',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_DAY",
        unique: true,
        fields: [
          { name: "dayid" },
        ]
      },
    ]
  });
};
