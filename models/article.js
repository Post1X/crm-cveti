const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('Article', {
    articleid: {
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
    importcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    showonfront: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    suminreport: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'article',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_ARTICLE",
        unique: true,
        fields: [
          { name: "articleid" },
        ]
      },
    ]
  });
};
