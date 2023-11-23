const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('refresh', {
    refreshid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    stationid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'station',
        key: 'stationid'
      }
    },
    timeitem: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bouquet: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    client: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'refresh',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_REFRESH",
        unique: true,
        fields: [
          { name: "refreshid" },
        ]
      },
    ]
  });
};
