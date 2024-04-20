import books from '../data/books';
import { HapiReq, HapiResToolkit } from '../types/hapi-types';

const detailBookHandler = (request: HapiReq, h: HapiResToolkit) => {
  const { id } = request.params;

  const findBookById = books.find((book) => book.id === id);

  if (typeof findBookById !== 'undefined') {
    return h.response({
      status: 'success',
      data: {
        book: findBookById,
      },
    }).code(200);
  }

  return h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  }).code(404);
};

export default detailBookHandler;
