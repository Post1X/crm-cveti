const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('senderdocitem', {
    senderdocitemid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    senderdocid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'senderdoc',
        key: 'senderdocid'
      }
    },
    clientid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'client',
        key: 'clientid'
      }
    },
    messagetext: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    ok: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    jsonresult: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'senderdocitem',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_SENDERDOCITEM",
        unique: true,
        fields: [
          { name: "senderdocitemid" },
        ]
      },
    ]
  });
};
