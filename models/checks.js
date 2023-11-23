const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('checks', {
    checkid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    opentime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    closetime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    openby: {
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
    clientid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'client',
        key: 'clientid'
      }
    },
    placeid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    opened: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    carid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    operationid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 1,
      references: {
        model: 'operation',
        key: 'operationid'
      }
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    comment: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    printed: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    stationid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    exported: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    importcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    closedby: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'usersid'
      }
    },
    storn: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    disband: {
      type: DataTypes.INTEGER,
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
    fiscalnumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bouquet: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    reservtime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    blocked: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    number: {
      type: DataTypes.STRING(20),
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
    barcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    parentcheckid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'checks',
        key: 'checkid'
      }
    },
    udsid: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    afl_card: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    afl_name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    afl_surname: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    afl_level: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    afl_discount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    exportedtosite: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    certificateid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    crmid: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    promocodeid: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    otkydaid: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'checks',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_CHECK",
        unique: true,
        fields: [
          { name: "checkid" },
        ]
      },
    ]
  });
};
