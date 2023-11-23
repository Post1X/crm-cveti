const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('client', {
    clientid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    firstname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    secondname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    otc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    clientgroupid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'clientgroup',
        key: 'clientgroupid'
      }
    },
    phone: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    percent: {
      type: DataTypes.DECIMAL,
      allowNull: true
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
    address: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    streetid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    house: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    korpus: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    podezd: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    flat: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    card: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pricelistid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'pricelist',
        key: 'pricelistid'
      }
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    clientaccountid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'clientaccount',
        key: 'clientaccountid'
      }
    },
    inn: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    kpp: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    firma: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    comment: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    bank: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    sex: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    createcomment: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    palletprice: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    udsid: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    createtime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    udspromo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    crmid: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    certificate: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    defaultburnbonus: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    certificateburn: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    certificateprice: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    startdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    enddate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    eachbouquet: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    eachbouquetdiscount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 100
    },
    createstoreid: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'client',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_CLIENT",
        unique: true,
        fields: [
          { name: "clientid" },
        ]
      },
    ]
  });
};
