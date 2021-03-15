const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Page', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Organization',
        key: 'id'
      }
    },
    type: {
      type: DataTypes.ENUM("Issue", "Campaign", "Funding", "Vote", "Discussion", "FollowUp"),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Page',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Page_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
