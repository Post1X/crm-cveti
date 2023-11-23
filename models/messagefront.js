const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('messagefront', {
    messagefrontid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    text: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    show: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    stationid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'station',
        key: 'stationid'
      }
    },
    orderid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    docid: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'messagefront',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_MESSAGEFRONT",
        unique: true,
        fields: [
          { name: "messagefrontid" },
        ]
      },
    ]
  });
};
