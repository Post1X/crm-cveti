const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('docbox', {
    docboxid: {
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
    boxid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'box',
        key: 'boxid'
      }
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'docbox',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_DOCBOX",
        unique: true,
        fields: [
          { name: "docboxid" },
        ]
      },
    ]
  });
};
