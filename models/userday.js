const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('userday', {
    userdayid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    usersid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'users',
        key: 'usersid'
      }
    },
    opentime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    closetime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    stationid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'station',
        key: 'stationid'
      }
    },
    importcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    exported: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    daysalary: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    daysale: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    daybouquet: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    dayhours: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dayid: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'userday',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_USERDAY",
        unique: true,
        fields: [
          { name: "userdayid" },
        ]
      },
    ]
  });
};
