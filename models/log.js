const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('log', {
    logid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    accessid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'access',
        key: 'accessid'
      }
    },
    comment: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    usersid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'users',
        key: 'usersid'
      }
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
    checkid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    exported: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'log',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_LOG",
        unique: true,
        fields: [
          { name: "logid" },
        ]
      },
    ]
  });
};
