const process = require('process');
const setBook = require('./hw2_module');

const args = process.argv;
const action = args[2];
const params = args[3];
const option = args[4];

switch (action) {
  case 'list':
    setBook.getlist(params || 20);
    break;
  case 'read':
    setBook.readBook(params);
    break;
  case 'delete':
    setBook.deleteBook(params);
    break;
  case 'create':
    setBook.createBook(params);
    break;
  case 'update':
    setBook.updateBook(params, option);
    break;
  default:
    console.log('error');
    break;
}
