function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.reduce((count, book) => {
    for (let i in book.borrows) {
      if (book.borrows[i].returned === false) count += 1;
    }
    return count;
  }, 0);
}

function getMostCommonGenres(books) {
  let genres = books.reduce((acc, book) => {
    acc.push(book.genre);
    return acc;
  }, []);

  let count = genres.reduce((acc, genre) => {
    if (acc[genre]) {
      acc[genre]++;
    } else {
      acc[genre] = 1;
    }
    return acc;
  }, {});

  let output = [];
  for (const [key, value] of Object.entries(count)) {
    output.push({ name: key, count: value });
  }

  output.sort((a, b) => b.count - a.count);

  return output.slice(0, 5);
}




function getMostPopularBooks(books) {
  books.sort((bookA, bookB) => bookA.borrows.length < bookB.borrows.length ? 1 : -1);

  for (let j in books) {
    books[j] = { name: books[j].title, count: books[j].borrows.length };
  }
  return books.slice(0, 5);

}

function getMostPopularAuthors(books, authors) {
  let newArr = [];
  for (let author of authors) {
    newArr.push({ name: `${author.name.first} ${author.name.last}`, count: _booksBorrowedByAuthorHelper(books, author) })
  }

  newArr.sort((a, b) => b.count - a.count);

  return newArr.slice(0, 5);
}

function _booksBorrowedByAuthorHelper(books, author) {
  let count = 0;
  for (const book of books) {
    if (book.authorId === author.id) {
      count += book.borrows.length;
    }
  }
  return count;
}
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
