import * as Hapi from '@hapi/hapi';
import { addBook, getAllBooks } from '../handler';

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
];

export default routes;
