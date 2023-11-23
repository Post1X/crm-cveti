const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userpercentstage', {
    userpercentstageid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    stage: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    stagevalue: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'userpercentstage',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_USERPERCENTSTAGE",
        unique: true,
        fields: [
          { name: "userpercentstageid" },
        ]
      },
    ]
  });
};
