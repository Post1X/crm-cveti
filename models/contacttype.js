const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contacttype', {
    contacttypeid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'contacttype',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_CONTACTTYPE",
        unique: true,
        fields: [
          { name: "contacttypeid" },
        ]
      },
    ]
  });
};
