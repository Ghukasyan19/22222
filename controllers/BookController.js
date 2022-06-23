const BookService =require('../services/BookService');
class BookController{
    static async getAllBooks(req,res){
     const books = await BookService.getAllBooks();
     res.status(200).send(books);
    }

    static async createBook(req, res){
        const {title, author, category, price, id} = req.body;
        await BookService.createBook(title, author, category, price, id);
        res.status(201).send('Book successfully created!');
    }
    static async getBookByAuthor(req, res){
        const books = await BookService.getBookByAuthor(req.params.name);
        console.log(req.params.name);
        res.status(200).send(books);
    }
    static async getBookByCategory(req, res){
        const books = await BookService.getBookByCategory(req.params.name);
        res.status(200).send(books);
    }
    static async getBookByPrice(req, res){
        const books = await BookService.getBookByPrice(req.params.price);
        res.status(200).send(books);
    }
    static async removeBookById(req, res){
        await BookService.removeBookByAuthor(req.params.name);
        res.status(200).send(`bookById ${req.params.name} deleted`);
    }
    static async updateBook(req, res){
        const {title, author, category, price, id} = req.body;
        await BookService.updateBook(id, title,  category, price, author);
        res.status(200).send('Books updated');
    }

}
module.exports = BookController;
