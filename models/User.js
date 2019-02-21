module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    userName: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  });
  User.associate = function (models) {
    // Associating User with Translate
    // When an User is deleted, also delete any associated Translations
    User.hasMany(models.Translate, {
      onDelete: "cascade"
    });
  };
  return User;
};
