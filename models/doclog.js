const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('doclog', {
    docid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ok: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    openby: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    okby: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    comment: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    storeid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    store2id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dayid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    importcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    exported: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    checkid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    parentdocid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    supplierid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    alarm: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    exported2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    costfromdoc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    partitionid: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    priceupdated: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pallet: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    totalpallet: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    number: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    createdbystoreid: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'doclog',
    schema: 'public',
    timestamps: false
  });
};
