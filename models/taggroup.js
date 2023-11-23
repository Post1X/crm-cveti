const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('taggroup', {
    taggroupid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    importcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    siteimportcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'taggroup',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_TAGSGROUP",
        unique: true,
        fields: [
          { name: "taggroupid" },
        ]
      },
    ]
  });
};
