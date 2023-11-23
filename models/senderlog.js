const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('senderlog', {
    senderlogid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    text: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    action: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    jsonresult: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'senderlog',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_SENDERLOG",
        unique: true,
        fields: [
          { name: "senderlogid" },
        ]
      },
    ]
  });
};
