const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('item', {
    itemid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    longname: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    itemgroupid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'itemgroup',
        key: 'itemgroupid'
      }
    },
    importcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    avaliable: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    departmentid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'department',
        key: 'departmentid'
      }
    },
    nodiscount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    service: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    notalarm: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    measureid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'measure',
        key: 'measureid'
      }
    },
    autopartition: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    area: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    onlywhole: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    discription: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    upload: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    minidiscription: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    attribute: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    fotomain: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    foto: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nobonus: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    altitemid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dontchangeprice: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    minstore: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    optimalstore: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    siteimportcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    isbouquet: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    crmid: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ndsid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 4
    },
    markup: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    popular: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    top: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    resizeble: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fiscaltype: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    komisnds: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    komisinn: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    komisname: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    freeprice: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    altname: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    notdelincheck: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    parentitemid: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'item',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_ITEM",
        unique: true,
        fields: [
          { name: "itemid" },
        ]
      },
    ]
  });
};
