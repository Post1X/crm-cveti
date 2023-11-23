const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('nalog', {
    nalogid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nalogfr: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "The user ID"
    }
  }, {
    sequelize,
    tableName: 'nalog',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_NALOG",
        unique: true,
        fields: [
          { name: "nalogid" },
        ]
      },
    ]
  });
};
