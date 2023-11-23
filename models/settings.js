const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('settings', {
    settingsid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    usediscount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    exchangepath: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    automaticexchange: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    version: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    exchangeblock: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    programtype: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    easysale: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bouquetnumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    maxbonuspay: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    downloadalldocs: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    blockcheckafterexit: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    usepasswordtounblock: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    itemforbarcode: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    barcodeprefix: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "299"
    },
    currency: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pricelistid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    controlbarcode: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    usepricehistory: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    userforntprice: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    okdocbyservice: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dsserverport: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: "211"
    },
    dsserverbase: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: "base"
    },
    defaultmeasureid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    usebasicprice: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    showrefrigerator: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    usepartition: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    baseprefix: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "Г–ГЃ"
    },
    baseisserver: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    autopartition: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    usepallet: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lite: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    showstoreindoc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    avaliableindoc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    basename: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    saleminusoffice: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    saleminusfront: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fillbybouquet: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    florasynclimit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 30
    },
    tcdout: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    tcdin: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    catalogtoupload: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    auto_ok: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    itemgrouptostation: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    showrealprice: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sortitembyposition: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    checkbarcodeprefix: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "255"
    },
    usecheckprefix: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    newcost: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    copybouquet: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    autobarcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bouquetname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    apikeysender: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    alphasender: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    codesender: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    fromsender: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    smsemailbyclienttrans: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    messagetextbyclienttransplus: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    messagetextbyclienttransminus: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    getclientbypin: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nalog: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 8
    },
    discounttostation: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    stocktostation: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    nobonustodiscount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    streamtelecom_login: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    streamtelecom_pass: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    streamtelecom_alpha: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    doc6frontprice: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    usealtitem: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    doubleiteminstock: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    checksyncdoc8: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    updatedoc8: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    controlupperdoc8: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    dontchangeprice: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    dayforcost: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 60
    },
    pathtoimages: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    usesendorder: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    ndsid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 4
    },
    usesite: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    useclientserver: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    showstartsettings: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    messagetime: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: "12:00:00"
    },
    burntime: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: "01:00:00"
    },
    backupfolder: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    backuptoken: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: "AgAAAAA_hMwtAAXu3TzAiV90G0jAtBDjIUidRLw"
    },
    autoitemcode: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    findbybarcode: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    paymenttostation: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    updatecheckdoc: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    newlicense: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    maxflorasync: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 2
    },
    florasynctimeout: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 10
    },
    paylinkurl: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    paylinklogin: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    paylinkpass: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    usepromotostation: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    nosearchycenka: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'settings',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_SETTINGS",
        unique: true,
        fields: [
          { name: "settingsid" },
        ]
      },
    ]
  });
};
