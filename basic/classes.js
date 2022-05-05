class Book {
  constructor(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
  }

  print() {
    console.log(`${this.title} has ${this.pages} pages and isbn ${this.isbn}`);
  }
}

const book = new Book("The Hobbit", 300, "123456789");
book.print();
