const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('checkitem', {
    checkitemid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
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
      allowNull: false,
      references: {
        model: 'item',
        key: 'itemid'
      }
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
      allowNull: false,
      defaultValue: 0
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
      allowNull: true,
      references: {
        model: 'stock',
        key: 'stockid'
      }
    },
    measureid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'measure',
        key: 'measureid'
      }
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
      allowNull: true,
      references: {
        model: 'measure',
        key: 'measureid'
      }
    },
    basemeasurevalue: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    ndsid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 4
    },
    ndstotal: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    afl_disocunt: {
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
    tableName: 'checkitem',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_CHECKITEM",
        unique: true,
        fields: [
          { name: "checkitemid" },
        ]
      },
    ]
  });
};
