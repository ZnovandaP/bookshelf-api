import * as Hapi from '@hapi/hapi';
import { addBook } from '../handler';

const routes: Hapi.ServerRoute[] = [
  {
    method: 'POST',
    path: '/books',
    handler: addBook,
  },
];

export default routes;
