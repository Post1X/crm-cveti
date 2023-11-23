const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dockomplekt', {
    dockomplektid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    docid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'doc',
        key: 'docid'
      }
    },
    docitemid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'docitem',
        key: 'docitemid'
      }
    },
    itemid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'item',
        key: 'itemid'
      }
    },
    measureid: {
      type: DataTypes.INTEGER,
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
    tableName: 'dockomplekt',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_DOCKOMPLEKT",
        unique: true,
        fields: [
          { name: "dockomplektid" },
        ]
      },
    ]
  });
};
