const Book = require('../models/book');

class BookService {
    static async getAllBooks() {
        return Book.findAll();
    }

    static  async createBook(title, author, category, price, id){
        await Book.create({title, author, category, price});
    }

    static async getBookByAuthor(bookAuthor){
       return Book.findAll({where: {author: bookAuthor}});
   }
    static async getBookByCategory(bookCategory){
        return Book.findAll({where: {category: bookCategory}});
    }
    static async getBookByPrice(bookPrice){
        return Book.findAll({where: {price: bookPrice}});
    }
    static async removeBookByAuthor(bookAuthor){
        await Book.destroy({where:{author: bookAuthor}})
    }

    static async updateBook(bookId,title, category,price,author){
    await Book.update({title, author, category, price},{where:{id:bookId}});
}
}
module.exports = BookService;
