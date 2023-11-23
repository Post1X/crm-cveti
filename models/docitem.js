const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('docitem', {
    docitemid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    docid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'doc',
        key: 'docid'
      }
    },
    itemid: {
      type: DataTypes.BIGINT,
      allowNull: true,
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
    new: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    checkitemid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'checkitem',
        key: 'checkitemid'
      }
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
      allowNull: true,
      defaultValue: 0
    },
    clientdiscountsum: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
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
      allowNull: true,
      references: {
        model: 'item',
        key: 'itemid'
      }
    },
    measure2id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'measure',
        key: 'measureid'
      }
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
      allowNull: true,
      defaultValue: 4
    },
    ndstotal: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
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
    tableName: 'docitem',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_DOCITEMID",
        unique: true,
        fields: [
          { name: "docitemid" },
        ]
      },
    ]
  });
};
