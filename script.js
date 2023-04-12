function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = false;
    this.getInfo = function () {
      return `${title} by ${author}, ${pages}, ${
        this.isRead ? "already read" : "not read yet"
      }`;
    };
  }

const book1 = new Book('the hobbit', 'Luis', 5);

console.log(book1.getInfo());