const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('tag', {
    tagid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    taggroupid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'taggroup',
        key: 'taggroupid'
      }
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    code: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    importcode: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    siteimportcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    item: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    client: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tag',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_TAG",
        unique: true,
        fields: [
          { name: "tagid" },
        ]
      },
    ]
  });
};
