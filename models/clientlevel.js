const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('clientlevel', {
    clientlevelid: {
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
    startsum: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    endsum: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    percent: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    bonus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'clientlevel',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_CLIENTLEVEL",
        unique: true,
        fields: [
          { name: "clientlevelid" },
        ]
      },
    ]
  });
};
