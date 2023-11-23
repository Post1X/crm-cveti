const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('accessusers', {
    accessusers: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    accessid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'access',
        key: 'accessid'
      }
    },
    usersgroupid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'usersgroup',
        key: 'usersgroupid'
      }
    },
    can: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'accessusers',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_ACCESSUSERS",
        unique: true,
        fields: [
          { name: "accessusers" },
        ]
      },
    ]
  });
};
