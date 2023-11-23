const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('docitem_time', {
    docitemid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    docid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    itemid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    subtotal: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    new: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    checkitemid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    importcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    exported: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    changeprice: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pricelistid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    frontprice: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    alarm: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    measureid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    partitionid: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    totalpallet: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    partitiontime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    realprice: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    discountid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    discountsum: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    clientdiscountsum: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    stockid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    basemeasureid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    basemeasurevalue: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    item2id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    measure2id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    amount2: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    price2: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    subtotal2: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    total2: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    itemcomment: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    ndsid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ndstotal: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    pricecurrency: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    totalcurrency: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    boxid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    salepercent: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    saleprice: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    saletotal: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    promocodeid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    promosum: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'docitem_time',
    schema: 'public',
    timestamps: false
  });
};
