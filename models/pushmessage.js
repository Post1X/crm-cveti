const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pushmessage', {
    pushmessageid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sended: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    sendtime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    exported: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pushmessage',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_PUSHMESSAGE",
        unique: true,
        fields: [
          { name: "pushmessageid" },
        ]
      },
    ]
  });
};
