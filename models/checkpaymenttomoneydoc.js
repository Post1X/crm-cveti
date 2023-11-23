const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('checkpaymenttomoneydoc', {
    checkpaymentid: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'checkpaymenttomoneydoc',
    schema: 'public',
    timestamps: false
  });
};
