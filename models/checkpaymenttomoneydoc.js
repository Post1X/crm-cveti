const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
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
