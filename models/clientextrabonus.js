const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('clientextrabonus', {
    clientextrabonus: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    storeid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'stores',
        key: 'storesid'
      }
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
    bonus: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    percent: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'clientextrabonus',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_CLIENTEXTRABONUS",
        unique: true,
        fields: [
          { name: "clientextrabonus" },
        ]
      },
    ]
  });
};
