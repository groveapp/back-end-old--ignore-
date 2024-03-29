const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LeaderAction', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Leader',
        key: 'id'
      }
    },
    issueId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vote: {
      type: DataTypes.ENUM("abstain","no","not_present","yes"),
      allowNull: true
    },
    explanation: {
      type: DataTypes.STRING(1024),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'LeaderAction',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "LeaderAction_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
