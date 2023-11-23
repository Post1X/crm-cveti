const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('moneydoc', {
    moneydocid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ok: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'operation',
        key: 'operationid'
      }
    },
    openby: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'usersid'
      }
    },
    okby: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'usersid'
      }
    },
    comment: {
      type: DataTypes.STRING(500),
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
    parentdocid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'doc',
        key: 'docid'
      }
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    supplierid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'supplier',
        key: 'supplierid'
      }
    },
    usersid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'users',
        key: 'usersid'
      }
    },
    clientid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'client',
        key: 'clientid'
      }
    },
    cashesid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'cashes',
        key: 'cashesid'
      }
    },
    articleid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'article',
        key: 'articleid'
      }
    },
    storeid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'stores',
        key: 'storesid'
      }
    },
    number: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    createdbystoreid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'stores',
        key: 'storesid'
      }
    },
    docpaymentid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'docpayment',
        key: 'docpaymentid'
      }
    },
    store2id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'stores',
        key: 'storesid'
      }
    },
    checkpaymentid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    depositid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'deposit',
        key: 'depositid'
      }
    },
    dolg: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    contractid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'clientcontract',
        key: 'contractid'
      }
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    exported2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    uploadtransaction: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    exportedto1c: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    dayid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'day',
        key: 'dayid'
      }
    },
    stationid: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'moneydoc',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_MONEYDOC",
        unique: true,
        fields: [
          { name: "moneydocid" },
        ]
      },
    ]
  });
};
