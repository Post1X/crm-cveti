const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('clientcontract', {
    contractid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    clientid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'client',
        key: 'clientid'
      }
    },
    limits: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    uselimit: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    avaliable: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    importcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'clientcontract',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_CLIENTCONTRACT",
        unique: true,
        fields: [
          { name: "contractid" },
        ]
      },
    ]
  });
};
