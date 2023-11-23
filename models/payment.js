const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('payment', {
    paymentid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    active: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fiscal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    client: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    importcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    notsuminreport: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dolg: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nalogid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'nalog',
        key: 'nalogid'
      }
    },
    frnum: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'payment',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_PAYMENT",
        unique: true,
        fields: [
          { name: "paymentid" },
        ]
      },
    ]
  });
};
