var obj = new Object();
var obj2 = {};

var obj3 = {
  name: {
    first: "John",
    last: "Doe",
  },
  address: "123 Main St",
};

function Book(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;

  this.printBook = function () {
    console.log("--- PRINT ---");
    console.log(this.title);
    console.log(this.pages);
    console.log(this.isbn);
  };
}

Book.prototype.printTitle = function () {
  console.log(this.title);
};
// usando o prototype a função será compartilhada entre todas as instâncias criadas, o que economiza processamento

var book = new Book("The Hobbit", 300, "123456789");
console.log(book.title);
book.pages = 100;
console.log(book.pages);
book.printBook();
book.printTitle();
