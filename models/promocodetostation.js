const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('promocodetostation', {
    promocodegroupid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    stationid: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'promocodetostation',
    schema: 'public',
    timestamps: false
  });
};
