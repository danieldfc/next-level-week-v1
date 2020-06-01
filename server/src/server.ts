import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('Listagem de usuários');

  response.json([
    'Diego',
    'Cleyton',
    'Robson',
    'Daniel'
  ]);
});

app.listen(3333, () => {
  console.log('> Server started on port 3333!');
});
