const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orders', {
    orderid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    comment: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    prepay: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    checkid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'checks',
        key: 'checkid'
      }
    },
    opentime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    createtime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    closetime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    openby: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'usersid'
      }
    },
    createby: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'usersid'
      }
    },
    closeby: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'usersid'
      }
    },
    totime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    customer: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    customerphone: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    receiver: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    receiverphone: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    receiveraddress: {
      type: DataTypes.STRING(1000),
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
    importcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    controledby: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'usersid'
      }
    },
    controltime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    number: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    statusdeliveryid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'status',
        key: 'statusid'
      }
    },
    endtime: {
      type: DataTypes.TIME,
      allowNull: true
    },
    dostavka: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    exported: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    new: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deleting: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    statusdeliverymanid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    deliverymanid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'users',
        key: 'usersid'
      }
    },
    statusorderid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'status',
        key: 'statusid'
      }
    },
    creatingby: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'usersid'
      }
    },
    exportedtosite: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    stationid2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    exported2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    crmid: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    facebookid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'status',
        key: 'statusid'
      }
    },
    otkydaid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'status',
        key: 'statusid'
      }
    },
    crmresponsibleuser: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    crmcreatedby: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    siteimportcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dop1: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    dop2: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    dop3: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    dop4: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    dop5: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    budget: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    payment: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dostavistaid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cardcomment: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'orders',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_ORDER",
        unique: true,
        fields: [
          { name: "orderid" },
        ]
      },
    ]
  });
};
