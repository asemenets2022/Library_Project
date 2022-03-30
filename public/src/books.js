function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  newArr = [[], []];
  books.filter((book) => {
    if (book.borrows[0].returned === false) {
      newArr[0].push(book);
    } else {
      newArr[1].push(book);
    }
  });
   return newArr;
}

function getBorrowersForBook(book, accounts) {
  let newArr = [];
  for (let i in book.borrows) {
    for (let j in accounts) {
      if (accounts[j].id === book.borrows[i].id) {
        newArr.push(accounts[j]);
      }
    }
  } 
  for (let i in newArr) {
    for (let j in book.borrows) {
      if (newArr[i].id === book.borrows[j].id) {
      newArr[i].returned = book.borrows[i].returned;   
    }
  }
}
  return newArr.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
