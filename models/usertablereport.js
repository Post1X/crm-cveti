const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('usertablereport', {
    users: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    dates: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    hours: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mindaylength: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dayprice: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    bonus: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'usertablereport',
    schema: 'public',
    timestamps: false
  });
};
