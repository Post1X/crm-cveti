const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('clientdiscountitemgroup', {
    clientdiscountitemgroupid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    clientid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'client',
        key: 'clientid'
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
    clientintervalid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    clientdateid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    importcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'clientdiscountitemgroup',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_CLIENTDISCOUNTITEMGROUP",
        unique: true,
        fields: [
          { name: "clientdiscountitemgroupid" },
        ]
      },
    ]
  });
};
