const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('status', {
    statusid: {
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
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    discard: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    avaliable: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    color: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    orders: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sendsms: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sendemail: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    messagetext: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    deliveryman: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    doc20: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    doc21: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    importcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    facebook: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    otkyda: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dop1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dop2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dop3: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'status',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_STATUSID",
        unique: true,
        fields: [
          { name: "statusid" },
        ]
      },
    ]
  });
};
