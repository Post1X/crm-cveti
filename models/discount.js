const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('discount', {
    discountid: {
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
    starttime: {
      type: DataTypes.TIME,
      allowNull: true
    },
    endtime: {
      type: DataTypes.TIME,
      allowNull: true
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    discountgroupid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    value: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    mode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    blocked: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
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
    personal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    card: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    itemfordiscount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    maxdiscount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'discount',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_DISCOUNT",
        unique: true,
        fields: [
          { name: "discountid" },
        ]
      },
    ]
  });
};
