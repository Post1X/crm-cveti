const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('itemtoupload', {
    itemtouploadid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    itemid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'item',
        key: 'itemid'
      }
    },
    stationid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'station',
        key: 'stationid'
      }
    },
    uploading: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'itemtoupload',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_ITEMTOUPLOAD",
        unique: true,
        fields: [
          { name: "itemtouploadid" },
        ]
      },
    ]
  });
};
