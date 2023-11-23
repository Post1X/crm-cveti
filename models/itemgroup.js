const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('itemgroup', {
    itemgroupid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    parentid: {
      type: DataTypes.BIGINT,
      allowNull: false
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
    color: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    autopartition: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    onlywhole: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    dontchangeprice: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
    }
  }, {
    sequelize,
    tableName: 'itemgroup',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_ITEMGROUP",
        unique: true,
        fields: [
          { name: "itemgroupid" },
        ]
      },
    ]
  });
};
