const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('doclogs', {
    doclogsid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    docid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    usersid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'users',
        key: 'usersid'
      }
    },
    headercomment: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    itemcomment: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    button: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'doclogs',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_DOCLOGS",
        unique: true,
        fields: [
          { name: "doclogsid" },
        ]
      },
    ]
  });
};
