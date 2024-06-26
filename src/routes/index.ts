import * as Hapi from '@hapi/hapi';
import {
  addBookHandler, deleteBookHandler, detailBookHandler, editBookHandler, getAllBooksHandler,
} from '../handler';

const routes: Hapi.ServerRoute[] = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },

  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },

  {
    method: 'GET',
    path: '/books/{id}',
    handler: detailBookHandler,
  },

  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookHandler,
  },

  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookHandler,
  },
];

export default routes;
