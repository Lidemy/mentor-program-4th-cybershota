const request = require('request');

const baseUrl = 'https://lidemy-book-store.herokuapp.com';

const setBook = {
  getlist(count) {
    let bookList;
    request.get(`${baseUrl}/books?_limit${count}`, (error, response, body) => {
      if (error) {
        return console.log('error: ', error);
      }
      if (response.statusCode >= 200 && response.statusCode < 300) {
        try {
          const data = JSON.parse(body);
          bookList = data.forEach((item, index) => {
            console.log(`${index + 1}. id: ${item.id} 書名: ${item.name}`);
          });
        } catch (err) {
          return console.log('error: ', err);
        }
      }
      return bookList;
    });
  },
  readBook(id) {
    request.get(`${baseUrl}/books/${id}`, (error, response, body) => {
      let book;
      if (error) {
        return console.log('error: ', error);
      }
      if (response.statusCode >= 200 && response.statusCode < 300) {
        try {
          const data = JSON.parse(body);
          book = data;
        } catch (err) {
          return console.log('error: ', err);
        }
      }
      return console.log(`id: ${book.id} 書名: 《${book.name}》`);
    });
  },
  deleteBook(id) {
    request.delete(`${baseUrl}/books/${id}`, (error) => {
      if (error) {
        return console.log('error: ', error);
      }
      return console.log('successes');
    });
  },
  createBook(bookname) {
    request.post({ url: `${baseUrl}/books`, form: { name: bookname } }, (error) => {
      if (error) {
        return console.log('error: ', error);
      }
      return console.log(`successfully add ${bookname} to the book list!`);
    });
  },
  updateBook(id, newName) {
    request.patch({ url: `${baseUrl}/books/${id}`, form: { name: newName } }, (error) => {
      if (error) {
        return console.log('error: ', error);
      }
      return console.log(`successfully update book id: ${id} name to ${newName}`);
    });
  },
};

module.exports = setBook;
