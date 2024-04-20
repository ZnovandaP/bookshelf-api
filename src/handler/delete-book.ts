import books from '../data/books';
import { HapiReq, HapiResToolkit } from '../types/hapi-types';

const deleteBookHandler = (request: HapiReq, h: HapiResToolkit) => {
  const { id } = request.params;

  const getBookIndex = books.findIndex((book) => book.id === id);
  const isBookIndexExist = getBookIndex !== -1;

  if (isBookIndexExist) {
    books.splice(getBookIndex, 1);

    return h.response({
      status: 'success',
      message: 'Buku berhasil dihapus',
    }).code(200);
  }

  return h.response({
    status: 'fail',
    message: 'Buku gagal dihapus. Id tidak ditemukan',
  }).code(404);
};

export default deleteBookHandler;
