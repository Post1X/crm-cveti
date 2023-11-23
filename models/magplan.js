const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('magplan', {
    magplanid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    storeid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'stores',
        key: 'storesid'
      }
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    plan: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    isday: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'magplan',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_MAGPLAN",
        unique: true,
        fields: [
          { name: "magplanid" },
        ]
      },
    ]
  });
};
