const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('clientphone', {
    clientphoneid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    phone: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    clientid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'client',
        key: 'clientid'
      }
    }
  }, {
    sequelize,
    tableName: 'clientphone',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_CLIENTPHONE",
        unique: true,
        fields: [
          { name: "clientphoneid" },
        ]
      },
    ]
  });
};
