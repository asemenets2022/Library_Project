function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((count, book) => {
    for (let i in book.borrows) {
    if (account.id === book.borrows[i].id) count += 1;
    } 
    return count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  books_belonging_to_account = [];

  books.map((book) => {
    book.borrows.map((borrows) => {
      if (borrows.id === account.id && borrows.returned === false) {
        books_belonging_to_account.push(book);
      }
    });
  });
  
  books_belonging_to_account.map((book) => {
    authors.map((author) => {
      if (author.id === book.authorId) {
        book.author = author;
      }
    })
  });
  return books_belonging_to_account;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
