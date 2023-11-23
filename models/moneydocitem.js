const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('moneydocitem', {
    moneydocitemid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    moneydocid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'moneydoc',
        key: 'moneydocid'
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
    cashes2id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'cashes',
        key: 'cashesid'
      }
    }
  }, {
    sequelize,
    tableName: 'moneydocitem',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_MONEYDOCITEM",
        unique: true,
        fields: [
          { name: "moneydocitemid" },
        ]
      },
    ]
  });
};
