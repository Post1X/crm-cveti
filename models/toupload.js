const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('toupload', {
    stationid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    stockid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    discountid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    usersid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    supplierid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    articleid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    cashesid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    statusid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    storesid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    wishid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    itemgroupid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    paymentid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    usersgroupid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    wishgroupid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    clienttransactionid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    usertransactionid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    contracttransactionid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    magplanid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    promocodegroupid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    promocodeid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    clientgroupid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    newstationid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    taggroupid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    tagid: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'toupload',
    schema: 'public',
    timestamps: false
  });
};
