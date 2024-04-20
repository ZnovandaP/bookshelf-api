import { nanoid } from 'nanoid';
import books from '../data/books';
import type { BookEntity, BaseBookEntity } from '../types/books-types';
import type { HapiResToolkit, HapiReq } from '../types/hapi-types';

export type AddBookPayload = Omit<BookEntity, 'updatedAt' | 'insertedAt' | 'finished' | 'id'>
& Pick<BaseBookEntity, 'name'>;

const addBookHandler = async (request: HapiReq, h: HapiResToolkit) => {
  const id = nanoid(16);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
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
  const finished = readPage === pageCount;

  const newBook: BookEntity = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
    finished,
    insertedAt,
    updatedAt,
  };

  if (!name) {
    return h.response(
      {
        status: 'fail',
        message: 'Gagal menambahkan buku. Mohon isi nama buku',
      },
    ).code(400);
  }

  if (readPage > pageCount) {
    return h.response(
      {
        status: 'fail',
        message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
      },
    ).code(400);
  }

  books.push(newBook);
  const isSuccess = books.filter((book) => book.id === id).length > 0;

  if (isSuccess) {
    return h.response(
      {
        status: 'success',
        message: 'Buku berhasil ditambahkan',
        data: {
          bookId: id,
        },
      },
    ).code(201);
  }
  return h.response({ status: 'fail', message: 'Buku gagal ditambahkan' }).code(400);
};

export default addBookHandler;
