const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wishgroup', {
    wishgroupid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    avaliable: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    onlyone: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    usecomment: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'wishgroup',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_WISHGROUP",
        unique: true,
        fields: [
          { name: "wishgroupid" },
        ]
      },
    ]
  });
};
