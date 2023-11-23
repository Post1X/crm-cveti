const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sender', {
    senderid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    operatortype: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    messagetype: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    login: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pass: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    action: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    alpha: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    messagetext: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    senderdocitemid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'senderdocitem',
        key: 'senderdocitemid'
      }
    }
  }, {
    sequelize,
    tableName: 'sender',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_SENDER",
        unique: true,
        fields: [
          { name: "senderid" },
        ]
      },
    ]
  });
};
