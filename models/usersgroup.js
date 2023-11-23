const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usersgroup', {
    usersgroupid: {
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
    percent: {
      type: DataTypes.DECIMAL,
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
    mindaylength: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dayprice: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    salepercent: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    bouquetpercent: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    byhour: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mintohour: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'usersgroup',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_USERSGROUP",
        unique: true,
        fields: [
          { name: "usersgroupid" },
        ]
      },
    ]
  });
};
