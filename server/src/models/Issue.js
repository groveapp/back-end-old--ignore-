const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Issue', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Organization',
        key: 'id'
      }
    },
    total_votes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    isBill: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Issue',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Issue_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
