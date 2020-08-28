const https = require('https');

const options = {
  hostname: 'lidemy-book-store.herokuapp.com',
  port: 443,
  path: '/',
  method: 'GET',
};

const data = [];
let bookList;

const setBook = {
  getlist(count) {
    options.path = `/books?_limit=${count}`;
    const req = https.request(options, (res) => {
      res
        .on('data', (d) => {
          data.push(d);
        })
        .on('end', () => {
          try {
            bookList = JSON.parse(Buffer.concat(data).toString('utf8'));
          } catch (err) {
            console.log(err);
          }
          bookList.forEach((item) => {
            console.log(item.id, item.name);
          });
        });
    });

    req.on('error', (e) => {
      console.error(e);
    });
    req.end();
    return bookList;
  },
  readBook(id) {
    options.path = `/books/${id}`;
    const req = https.request(options, (res) => {
      res
        .on('data', (d) => {
          data.push(d);
        })
        .on('end', () => {
          try {
            bookList = JSON.parse(Buffer.concat(data).toString('utf8'));
          } catch (err) {
            console.log(err);
          }
          console.log(bookList.id, bookList.name);
        });
    });

    req.on('error', (e) => {
      console.error(e);
    });
    req.end();
  },
  deleteBook(id) {
    options.method = 'DELETE';
    options.path = `/books/${id}`;
    const req = https.request(options);

    req.on('error', (e) => {
      console.error(e);
    });
    req.end('end', () => {
      console.log('successes');
    });
  },
  createBook(bookname) {
    // 參考資料 https://stackoverflow.com/questions/40537749/how-do-i-make-a-https-post-in-node-js-without-any-third-party-module
    const postData = JSON.stringify({ name: bookname });
    options.path = '/books';
    options.method = 'POST';
    options.headers = {
      'Content-Type': 'application/json',
      'Content-Length': postData.length,
    };
    const req = https.request(options);

    req.on('error', (e) => {
      console.error(e);
    });
    req.write(postData);
    req.end('end', () => {
      console.log(`successfully add ${bookname} to the book list!`);
    });
  },
  updateBook(id, newName) {
    const postData = JSON.stringify({ name: newName });
    options.path = `/books/${id}`;
    options.method = 'PATCH';
    options.headers = {
      'Content-Type': 'application/json',
      'Content-Length': postData.length,
    };
    const req = https.request(options);

    req.on('error', (e) => {
      console.error(e);
    });
    req.write(postData);
    req.end('end', () => {
      console.log(`successfully update ${newName} to the book list!`);
    });
  },
};

module.exports = setBook;
