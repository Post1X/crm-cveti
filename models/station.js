const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('station', {
    stationid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    basename: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    active: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    storesid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'stores',
        key: 'storesid'
      }
    },
    importcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    clienttransactionid: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'station',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_STATION",
        unique: true,
        fields: [
          { name: "stationid" },
        ]
      },
    ]
  });
};
