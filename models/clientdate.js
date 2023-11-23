const { DataTypes } = require('sequelize');
module.exports = function(sequelize) {
  return sequelize.define('clientdate', {
    clientdateid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    clientid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'client',
        key: 'clientid'
      }
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    radiusplus: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    radiusminus: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    percent: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    comment: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    bonus: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    burnday: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    message: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    day: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    month: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    domessage: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    nextmessagedate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nextbonusdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nextburndate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    rememberday: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    smstextid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pluspercent: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    plusbonus: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'clientdate',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_CLIENTDATE",
        unique: true,
        fields: [
          { name: "clientdateid" },
        ]
      },
    ]
  });
};
