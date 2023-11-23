const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('docitem20', {
    docitemid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    docid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'doc',
        key: 'docid'
      }
    },
    doc21id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'doc',
        key: 'docid'
      }
    }
  }, {
    sequelize,
    tableName: 'docitem20',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_DOCITEM20",
        unique: true,
        fields: [
          { name: "docitemid" },
        ]
      },
    ]
  });
};
