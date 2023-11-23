const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('nds', {
    ndsid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    value: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'nds',
    schema: 'public',
    timestamps: false
  });
};
