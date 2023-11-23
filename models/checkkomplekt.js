const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('checkkomplekt', {
    checkkomplektid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    checkid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'checks',
        key: 'checkid'
      }
    },
    checkitemid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'checkitem',
        key: 'checkitemid'
      }
    },
    itemid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'item',
        key: 'itemid'
      }
    },
    measureid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'measure',
        key: 'measureid'
      }
    },
    measurevalue: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    importcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    exported: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'checkkomplekt',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_CHECKKOMPLEKTID",
        unique: true,
        fields: [
          { name: "checkkomplektid" },
        ]
      },
    ]
  });
};
