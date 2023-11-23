const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('doc', {
    docid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ok: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    storeid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'stores',
        key: 'storesid'
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
    dayid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'day',
        key: 'dayid'
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
    checkid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'checks',
        key: 'checkid'
      }
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    parentdocid: {
      type: DataTypes.BIGINT,
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
    alarm: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    exported2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    costfromdoc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    partitionid: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    priceupdated: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pallet: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    totalpallet: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    number: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    createdbystoreid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    exportedto1c: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    clientid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'client',
        key: 'clientid'
      }
    },
    contractid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'clientcontract',
        key: 'contractid'
      }
    },
    contractsumm: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    statusid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'status',
        key: 'statusid'
      }
    },
    uploadtransaction: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    importcode1c: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    basisdoc: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    basistime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    currencyid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    kyrs: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    certificateid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fillbybouquet: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    promocodeid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    confirmcomment: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    confirmcomment2: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    starttime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    endtime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'doc',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_DOC",
        unique: true,
        fields: [
          { name: "docid" },
        ]
      },
    ]
  });
};
