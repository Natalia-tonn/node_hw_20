class Library{
    static totalBook: number = 0
    constructor (public name: String){}

    addBook(){
        Library.totalBook++
    }
    static getTotalBook(){
        return Library.totalBook
    }
}
const library1 = new Library ("Library1")
const library2 = new Library ("Library2")

library1.addBook()
library1.addBook()
library2.addBook()
library1.addBook()
library2.addBook()
library2.addBook()

console.log(`Total books: ${Library.getTotalBook()}`);
