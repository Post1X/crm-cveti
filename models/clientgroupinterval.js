const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('clientgroupinterval', {
    clientgroupintervalid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    clientgroupid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'clientgroup',
        key: 'clientgroupid'
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
    tableName: 'clientgroupinterval',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_CLIENTGROUPINTERVAL",
        unique: true,
        fields: [
          { name: "clientgroupintervalid" },
        ]
      },
    ]
  });
};
