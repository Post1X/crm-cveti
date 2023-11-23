const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('clienttoupload', {
    clientid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'client',
        key: 'clientid'
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
    refreshinfo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    uploading: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'clienttoupload',
    schema: 'public',
    timestamps: false
  });
};
