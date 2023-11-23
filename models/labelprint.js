const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('labelprint', {
    labelprintid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    itemid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    barcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    doc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    measureid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    partitionid: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'labelprint',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_LABELPRINT",
        unique: true,
        fields: [
          { name: "labelprintid" },
        ]
      },
    ]
  });
};
