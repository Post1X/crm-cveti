const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('senderdoc', {
    senderdocid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ok: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    number: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    comment: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    sendtime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    smsemail: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    listid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    messageid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    campaignid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    messagetext: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'senderdoc',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_SENDERDOC",
        unique: true,
        fields: [
          { name: "senderdocid" },
        ]
      },
    ]
  });
};
