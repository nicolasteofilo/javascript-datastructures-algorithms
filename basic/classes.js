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

// Heritage
class ITBook extends Book {
  constructor(title, pages, isbn, tech) {
    // o super referencia ao construtor da classe pai ( Book )
    super(title, pages, isbn);
    this.tech = tech;
  }

  printTech() {
    console.log(`${this.title} is written in ${this.tech}`);
  }
}

const jsBook = new ITBook("JavaScript", 300, "123456789", "JavaScript");
jsBook.printTech();
