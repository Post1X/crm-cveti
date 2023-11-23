const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('docitem23', {
    docitemid: {
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
    clientdocid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    moneydocid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    comment: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    totalp: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    totalm: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'docitem23',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_DOCITEM23",
        unique: true,
        fields: [
          { name: "docitemid" },
        ]
      },
    ]
  });
};
