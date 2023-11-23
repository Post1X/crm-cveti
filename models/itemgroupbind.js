const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('itemgroupbind', {
    itemgroupbindid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    itemgroupid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    itemid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'itemgroupbind',
    schema: 'public',
    timestamps: false
  });
};
