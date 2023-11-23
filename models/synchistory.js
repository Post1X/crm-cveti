const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('synchistory', {
    sycnhistoryid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    storeid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ok: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    up_down: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    comment: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'synchistory',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_SYNCHISTORY",
        unique: true,
        fields: [
          { name: "sycnhistoryid" },
        ]
      },
    ]
  });
};
