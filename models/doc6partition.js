const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doc6partition', {
    doc6partitionid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    docitemid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'docitem',
        key: 'docitemid'
      }
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    cost: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    partitionid: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    partitiontime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    loaded: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'doc6partition',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_DOC6PARTITION",
        unique: true,
        fields: [
          { name: "doc6partitionid" },
        ]
      },
    ]
  });
};
