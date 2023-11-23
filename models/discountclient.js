const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('discountclient', {
    discountclientid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    clientgroupid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    discountid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    importcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    avaliable: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'discountclient',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_DISCOUNTCLIENT",
        unique: true,
        fields: [
          { name: "discountclientid" },
        ]
      },
    ]
  });
};
