const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('schet', {
    schetid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    organizationid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'organization',
        key: 'organizationid'
      }
    },
    number: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    bank: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    bik: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    korr: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'schet',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_SCHET",
        unique: true,
        fields: [
          { name: "schetid" },
        ]
      },
    ]
  });
};
