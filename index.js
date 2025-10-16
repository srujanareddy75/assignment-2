const express = require('express');
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
  res.send('main page ');
 
});

app.get('/books', (req, res) => {
  res.send('books page ');
});

app.get('/users', (req, res) => {
  res.send('users page');
});

app.get('/borrow', (req, res) => {
  res.send('borrowed books book list');
});

app.get('/return', (req, res) => {
  res.send('returned books list');
});

app.get('/books/:id', (req, res) => {
  res.send(`Book with id `);
});

app.get('/users/:id/borrow-history', (req, res) => {
  res.send(`Borrow history for user with id `);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
