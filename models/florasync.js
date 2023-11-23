const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('florasync', {
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    starttime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    pid: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'florasync',
    schema: 'public',
    timestamps: false
  });
};
