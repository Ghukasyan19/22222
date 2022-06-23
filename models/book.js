'use strict';
const {DataTypes, Model} = require('sequelize');
const connection = require('../db/connection');

  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Book.init({
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    category: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize: connection,
    modelName: 'Book',
    tableName: 'books'
  });
module.exports = Book;
