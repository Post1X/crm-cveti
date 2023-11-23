const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('stores', {
    storesid: {
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
    importcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    blockdate: {
      type: DataTypes.DATEONLY,
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
    articleid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    storestypeid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 1,
      references: {
        model: 'storestype',
        key: 'storestypeid'
      }
    },
    salesplan: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    discardplan: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    saleplanpercent: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    usercalctype: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    usergetpercentbyplan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    upplanpercent: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    upuserplanpercent: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    useroperationforpercent: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dayopentimeafter: {
      type: DataTypes.TIME,
      allowNull: true
    },
    nightopentimeafter: {
      type: DataTypes.TIME,
      allowNull: true
    },
    pin: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lastupdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    confirm_doc: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'stores',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_STORES",
        unique: true,
        fields: [
          { name: "storesid" },
        ]
      },
    ]
  });
};
