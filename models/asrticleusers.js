const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('asrticleusers', {
    articleid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'article',
        key: 'articleid'
      }
    },
    usersgroupid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usersgroup',
        key: 'usersgroupid'
      }
    }
  }, {
    sequelize,
    tableName: 'asrticleusers',
    schema: 'public',
    timestamps: false
  });
};
