const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('cashes', {
    cashesid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
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
    central: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    storeid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'stores',
        key: 'storesid'
      }
    },
    schet: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nomerschet: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    bik: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    korrschet: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    centralcashesid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'cashes',
        key: 'cashesid'
      }
    },
    articleid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'article',
        key: 'articleid'
      }
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cashes',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_CASHES",
        unique: true,
        fields: [
          { name: "cashesid" },
        ]
      },
    ]
  });
};
