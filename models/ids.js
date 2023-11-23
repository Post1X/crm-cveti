const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('ids', {
    start_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ids',
    schema: 'public',
    timestamps: false
  });
};
