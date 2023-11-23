const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doctook', {
    doctookid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    docid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'doc',
        key: 'docid'
      }
    },
    moneydocid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'moneydoc',
        key: 'moneydocid'
      }
    }
  }, {
    sequelize,
    tableName: 'doctook',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_DOCTOOK",
        unique: true,
        fields: [
          { name: "doctookid" },
        ]
      },
    ]
  });
};
