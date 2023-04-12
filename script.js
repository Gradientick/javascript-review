function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = false;
    this.getInfo = function () {
        return `${title} by ${author}, ${pages}, ${
            this.isRead ? "already read" : "not yet read"
        }`;
    };
} 

const book1 = new Book("Life of Luis", "Luis Camus", "100");
console.log(book1.getInfo());