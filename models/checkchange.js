const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('checkchange', {
    checkchangeid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    checkid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'checks',
        key: 'checkid'
      }
    },
    changeid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'change',
        key: 'changeid'
      }
    },
    time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    changepassid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'changepass',
        key: 'changepassid'
      }
    }
  }, {
    sequelize,
    tableName: 'checkchange',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_CHECKCHANGE",
        unique: true,
        fields: [
          { name: "checkchangeid" },
        ]
      },
    ]
  });
};
