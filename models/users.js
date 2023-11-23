const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    usersid: {
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
    code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    card: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    postid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    usersgroupid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'usersgroup',
        key: 'usersgroupid'
      }
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
    itemid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    mindaylength: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 8
    },
    dayprice: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    salepercent: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    bouquetpercent: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    byhour: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mintohour: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deliveryman: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    priceup: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 1000
    },
    pricedown: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 100
    },
    usepriceupdown: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    useraddress: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    birthdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    passportnumber: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    passportvidan: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    inn: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    fiscalname: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    deliverytoken: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    dayforopendoc: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_USERS",
        unique: true,
        fields: [
          { name: "usersid" },
        ]
      },
    ]
  });
};
