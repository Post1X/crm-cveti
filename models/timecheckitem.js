const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('timecheckitem', {
    checkitemid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    checkid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'checks',
        key: 'checkid'
      }
    },
    itemid: {
      type: DataTypes.BIGINT,
      allowNull: false
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
    starttime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    importcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    stationid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'station',
        key: 'stationid'
      }
    },
    disband: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    modify: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    printed: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ready: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    bouquet: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    realprice: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    new: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    komplektcheckitemid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    bonus: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    stockid: {
      type: DataTypes.BIGINT,
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
    basemeasureid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    basemeasurevalue: {
      type: DataTypes.DECIMAL,
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
    afl_discount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    checkpricelistid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    item2id: {
      type: DataTypes.INTEGER,
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
    measure2id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    wasamount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    addedby: {
      type: DataTypes.INTEGER,
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
    tableName: 'timecheckitem',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_TIMECHECKITEM",
        unique: true,
        fields: [
          { name: "checkitemid" },
        ]
      },
    ]
  });
};
