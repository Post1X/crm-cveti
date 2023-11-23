const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usertransaction', {
    usertransactionid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    usersid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'usersid'
      }
    },
    checkid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'checks',
        key: 'checkid'
      }
    },
    docid: {
      type: DataTypes.INTEGER,
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
    comment: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    exported: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    importcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    userdayid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'userday',
        key: 'userdayid'
      }
    },
    transtype: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    storeid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'stores',
        key: 'storesid'
      }
    },
    moneydocid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'moneydoc',
        key: 'moneydocid'
      }
    },
    time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'usertransaction',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_USERTRANSACTION",
        unique: true,
        fields: [
          { name: "usertransactionid" },
        ]
      },
    ]
  });
};
