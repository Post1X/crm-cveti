const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usercoordinate', {
    usercoordinateid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    usersid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'usersid'
      }
    },
    coordinate: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'usercoordinate',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_USERCOORDIANTE",
        unique: true,
        fields: [
          { name: "usercoordinateid" },
        ]
      },
    ]
  });
};
