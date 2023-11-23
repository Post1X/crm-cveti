const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('clienttag', {
    clienttagid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    clientid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'client',
        key: 'clientid'
      }
    },
    tagid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tag',
        key: 'tagid'
      }
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'clienttag',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_CLIENTTAG",
        unique: true,
        fields: [
          { name: "clienttagid" },
        ]
      },
    ]
  });
};
