'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.category, {
        foreignKey: {
          name: 'categoryId'
        }
      })
    
    this.belongsToMany(models.Cart, {
      through: 'Cart_ProductS',
      through: models.Cart_ProductS,
      foreignKey: 'productId',
      otherKey: 'cartId'
    })
  }
  }
  product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product',
  });
/*product.associate = models =>{
  product.belongsTo(models.category)
}*/
    return product;
};