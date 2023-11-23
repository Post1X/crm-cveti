const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('docpayment', {
    docpaymentid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    docid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'doc',
        key: 'docid'
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
    total: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    comment: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    checkpaymentid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'checkpayment',
        key: 'checkpaymentid'
      }
    },
    dayid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'day',
        key: 'dayid'
      }
    }
  }, {
    sequelize,
    tableName: 'docpayment',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_DOCPAYMENT",
        unique: true,
        fields: [
          { name: "docpaymentid" },
        ]
      },
    ]
  });
};
