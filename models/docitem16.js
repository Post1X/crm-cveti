const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('docitem16', {
    docitemid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    docid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'doc',
        key: 'docid'
      }
    },
    checkid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'checks',
        key: 'checkid'
      }
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    new: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'docitem16',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_DOCITEM16",
        unique: true,
        fields: [
          { name: "docitemid" },
        ]
      },
    ]
  });
};
