const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clienttransaction', {
    clienttransactionid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    clientid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'client',
        key: 'clientid'
      }
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    checkid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    transtype: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    time: {
      type: DataTypes.DATE,
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
    comment: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    sended: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    presenttransaction: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    parenttransaction: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    burntime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    checknumber: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'clienttransaction',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_CLTRANS",
        unique: true,
        fields: [
          { name: "clienttransactionid" },
        ]
      },
    ]
  });
};
