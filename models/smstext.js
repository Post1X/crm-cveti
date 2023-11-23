const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('smstext', {
    smstextid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    text: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'smstext',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_SMSTEXT",
        unique: true,
        fields: [
          { name: "smstextid" },
        ]
      },
    ]
  });
};
