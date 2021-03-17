function readingList(books) {
    // Write your code here...
    let booksTag = document.createElement('ul');
    for (let i = 0; i < books.length; i++) {
        let bookItem = document.createElement('li');
        let bookAuthor = document.createElement('p');
        bookAuthor.innerHTML = books[i].title + ", " + books[i].author;
        let bookImg = document.createElement('img');
        bookImg.src = imgSrc[i];

        bookItem.appendChild(bookAuthor);
        bookItem.appendChild(bookImg)
        booksTag.appendChild(bookItem)
    }
    let divBooks = document.getElementById('content')
    divBooks.appendChild(booksTag)

}
const imgSrc = [
    "https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
    "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/tpp20.jpg",
];


const books = [{
        title: "The Design of Everyday Things",
        author: "Don Norman",
        alreadyRead: false
    },
    {
        title: "The Most Human Human",
        author: "Brian Christian",
        alreadyRead: true
    },
    {
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt",
        alreadyRead: true
    }
];

readingList(books);