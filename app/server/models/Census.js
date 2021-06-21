const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Census', {
    personId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    voterReg: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    voterRegLoc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ethnicity: {
      type: DataTypes.ENUM("white","black","asian","latinx","amerind_ak","pacific_islander","2_or_more","other"),
      allowNull: true
    },
    income: {
      type: DataTypes.ENUM("less_than_10k","10k_20k","10k_30k","30k_40k","40k_50k","60k_70k","70k_80k","80k_90k","90k_100k","100k_110k","110k_120k","120k_130k","130k_140k","140k_150k","more_than_150k"),
      allowNull: true
    },
    education: {
      type: DataTypes.ENUM("less_high_school","some_high_school","high_school_diploma","some_college","bachelor_degree","some_graduate","graduate_degree"),
      allowNull: true
    },
    party_affiliation: {
      type: DataTypes.ENUM("Republican","Democratic","Independent","Libertarian","Green","Other","Unknown"),
      allowNull: true
    },
    prim_language: {
      type: DataTypes.ENUM("english","spanish","german","chinese","tagalog","vietnamese","french","other"),
      allowNull: true
    },
    occupation: {
      type: DataTypes.ENUM("not_employed_not_seeking","self_employed","not_employed_seeking","management_business","professional","service","sales","admin_support","farming_fishing_forestry","construction_mining","installation_maintenance_repair","manufacturing_production","transportation","armed_forces"),
      allowNull: true
    },
    marital_status: {
      type: DataTypes.ENUM("married","divorced","separated","widowed","never_married"),
      allowNull: true
    },
    numChildren: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Census',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Census_pkey",
        unique: true,
        fields: [
          { name: "personId" },
        ]
      },
    ]
  });
};
