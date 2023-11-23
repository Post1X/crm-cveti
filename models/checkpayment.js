const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('checkpayment', {
    checkpaymentid: {
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
    paymentid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'payment',
        key: 'paymentid'
      }
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    time: {
      type: DataTypes.DATE,
      allowNull: true
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
    printed: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    prepay: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dayid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'day',
        key: 'dayid'
      }
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    authcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    transtype: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    operationtype: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sum: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    cardnumber: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    slipnumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    transdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    transtime: {
      type: DataTypes.TIME,
      allowNull: true
    },
    msgnumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    terminalid: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    referencenumber: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    responsecode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    kkmday: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sliptext: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    hide: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'checkpayment',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_CHECKPAYMENT",
        unique: true,
        fields: [
          { name: "checkpaymentid" },
        ]
      },
    ]
  });
};
