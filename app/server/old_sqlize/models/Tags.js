const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Tags', {
    issueId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Issue',
        key: 'id'
      }
    },
    tag: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Tags',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Tags_pkey",
        unique: true,
        fields: [
          { name: "issueId" },
        ]
      },
    ]
  });
};
