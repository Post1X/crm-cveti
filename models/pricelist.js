const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('pricelist', {
    pricelistid: {
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
    importcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    avaliable: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    starttime: {
      type: DataTypes.TIME,
      allowNull: true
    },
    endtime: {
      type: DataTypes.TIME,
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pricelist',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_PRICELIST",
        unique: true,
        fields: [
          { name: "pricelistid" },
        ]
      },
    ]
  });
};
