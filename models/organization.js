const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('organization', {
    organizationid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    inn: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    kpp: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ogrn: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    uradress: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    fizaddress: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    directir: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    buh: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    firma: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    edo: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'organization',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_ORGANIZATION",
        unique: true,
        fields: [
          { name: "organizationid" },
        ]
      },
    ]
  });
};
