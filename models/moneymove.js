const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('moneymove', {
    moneymoveid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    total: {
      type: DataTypes.DECIMAL,
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
    realtime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cashesid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'cashes',
        key: 'cashesid'
      }
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
    moneydocid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'moneydoc',
        key: 'moneydocid'
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
    stationid: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'moneymove',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_MONEYMOVE",
        unique: true,
        fields: [
          { name: "moneymoveid" },
        ]
      },
    ]
  });
};
