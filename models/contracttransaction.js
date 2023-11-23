const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contracttransaction', {
    contracttransactionid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    contractid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'clientcontract',
        key: 'contractid'
      }
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
    importcode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    moneydocnumber: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    comment: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    checkpaymentid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    docid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'doc',
        key: 'docid'
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
    uploadtransaction: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    exported: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    moneydocid: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'contracttransaction',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_CONTRACTTRANSATION",
        unique: true,
        fields: [
          { name: "contracttransactionid" },
        ]
      },
    ]
  });
};
