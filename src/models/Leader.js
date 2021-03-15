const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Leader', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    honorific: {
      type: DataTypes.STRING,
      allowNull: true
    },
    approvals: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    disapproval: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    approvalRating: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    type: {
      type: DataTypes.ENUM("Politician", "Manager", "Coach", "Supervisor", "Foreman"),
      allowNull: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Leader',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Leader_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
