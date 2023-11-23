const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('itemgrouponstation', {
    itemgroupid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'itemgroup',
        key: 'itemgroupid'
      }
    },
    stationid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'station',
        key: 'stationid'
      }
    }
  }, {
    sequelize,
    tableName: 'itemgrouponstation',
    schema: 'public',
    timestamps: false
  });
};
