const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('clientinterval', {
    clientintervalid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    clientid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'client',
        key: 'clientid'
      }
    },
    starts: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    ends: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    value: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    importcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'clientinterval',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_CLIENTINTERVAL",
        unique: true,
        fields: [
          { name: "clientintervalid" },
        ]
      },
    ]
  });
};
