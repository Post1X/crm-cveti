const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('florasyncqueue', {
    florasyncqueueid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    starttime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    florasync: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    storeid: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'florasyncqueue',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_FLORASYNCQUEUE",
        unique: true,
        fields: [
          { name: "florasyncqueueid" },
        ]
      },
    ]
  });
};
