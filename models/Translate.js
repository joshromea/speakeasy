module.exports = function (sequelize, DataTypes) {
  //define the name of the model//
  var Translate = sequelize.define("Translate", {
    translateFrom: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    translateTo: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    }
  });

  // ** commented out for now, it's throwing an error that UserId cannot be null with sequelize **

  // Add a belongsTo association to Users here
  // Translate.associate = function (models) {
  //   //  a translate should belong to a User
  //   // A translate can't be created without a user due to the foreign key constraint
  //   Translate.belongsTo(models.User, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };
  return Translate;
};
