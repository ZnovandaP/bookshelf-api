import * as Hapi from '@hapi/hapi';
import { addBook, detailBookHandler, getAllBooks } from '../handler';

const routes: Hapi.ServerRoute[] = [
  {
    method: 'POST',
    path: '/books',
    handler: addBook,
  },

  {
    method: 'GET',
    path: '/books',
    handler: getAllBooks,
  },

  {
    method: 'GET',
    path: '/books/{id}',
    handler: detailBookHandler,
  },
];

export default routes;
