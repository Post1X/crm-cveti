const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('box', {
    boxid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'box',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_BOX",
        unique: true,
        fields: [
          { name: "boxid" },
        ]
      },
    ]
  });
};
