const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('checktook', {
    checktookid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    checkid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    depositid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'deposit',
        key: 'depositid'
      }
    },
    save: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dayid: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'checktook',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_CHECKTOOK",
        unique: true,
        fields: [
          { name: "checktookid" },
        ]
      },
    ]
  });
};
