const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('supplier', {
    supplierid: {
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
    address: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    inn: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    kpp: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    importcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    man: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    addressur: {
      type: DataTypes.STRING(1000),
      allowNull: true
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
    tableName: 'supplier',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_SUPPLIER",
        unique: true,
        fields: [
          { name: "supplierid" },
        ]
      },
    ]
  });
};
