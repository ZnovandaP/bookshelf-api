import books from '../data/books';
import type { BookEntity, BaseBookEntity } from '../types/books-types';
import type { HapiResToolkit, HapiReq } from '../types/hapi-types';

export type AddBookPayload = Omit<BookEntity, 'updatedAt' | 'insertedAt' | 'finished' | 'id'>
& Pick<BaseBookEntity, 'name'>;

const editBookHandler = async (request: HapiReq, h: HapiResToolkit) => {
  const updatedAt = new Date().toISOString();
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload as AddBookPayload;

  if (!name) {
    return h.response(
      {
        status: 'fail',
        message: 'Gagal memperbarui buku. Mohon isi nama buku',
      },
    ).code(400);
  }

  if (readPage > pageCount) {
    return h.response(
      {
        status: 'fail',
        message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
      },
    ).code(400);
  }

  const getBookIndex = books.findIndex((book) => book.id === request.params.id);
  const isBookIndexExist = getBookIndex !== -1;

  if (isBookIndexExist) {
    books[getBookIndex] = {
      ...books[getBookIndex],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
      updatedAt,
    };

    return h.response(
      {
        status: 'success',
        message: 'Buku berhasil diperbarui',
      },
    ).code(200);
  }
  return h.response({ status: 'fail', message: 'Gagal memperbarui buku. Id tidak ditemukan' }).code(404);
};

export default editBookHandler;
