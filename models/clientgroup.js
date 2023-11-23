const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clientgroup', {
    clientgroupid: {
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
    discountpercent: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    bonuspercent: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    bonustotal: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    startpercent: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    endpercent: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    shiftpercent: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    shiftpercentsum: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    startbonus: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    endbonus: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    shiftbonus: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    shiftbonussum: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    nextdiscountsum: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    nextbonussum: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    startbonussum: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    certificate: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    defaultburnbonus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
    certicateprefix: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    maxbonuspay: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    useautomessage: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nextdayautomessage: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dayautomessage: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    buyinmonth: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    messagetext: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    addmonus: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    avaliableonstation: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'clientgroup',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_CLIENTGROUP",
        unique: true,
        fields: [
          { name: "clientgroupid" },
        ]
      },
    ]
  });
};
