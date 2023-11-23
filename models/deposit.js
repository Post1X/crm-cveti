const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('deposit', {
    depositid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    paymentid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'payment',
        key: 'paymentid'
      }
    },
    stationid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'station',
        key: 'stationid'
      }
    },
    time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    usersid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'users',
        key: 'usersid'
      }
    },
    comment: {
      type: DataTypes.STRING(200),
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
    importcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    exported: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    articleid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'article',
        key: 'articleid'
      }
    },
    cashesid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    cashes2id: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'deposit',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_DEPOSIT",
        unique: true,
        fields: [
          { name: "depositid" },
        ]
      },
    ]
  });
};
