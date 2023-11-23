const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('florasyncnow', {
    florasyncnowid: {
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
    tableName: 'florasyncnow',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_FLORASYNCNOW",
        unique: true,
        fields: [
          { name: "florasyncnowid" },
        ]
      },
    ]
  });
};
