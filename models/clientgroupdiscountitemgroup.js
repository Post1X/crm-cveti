const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('clientgroupdiscountitemgroup', {
    clientgroupdiscountitemgroupid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    clientgroupid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'clientgroup',
        key: 'clientgroupid'
      }
    },
    itemgroupid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'itemgroup',
        key: 'itemgroupid'
      }
    },
    value: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    clientgroupintervalid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    importcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'clientgroupdiscountitemgroup',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_CLIENTGROUPDISCOUNTITEMGROUP",
        unique: true,
        fields: [
          { name: "clientgroupdiscountitemgroupid" },
        ]
      },
    ]
  });
};
