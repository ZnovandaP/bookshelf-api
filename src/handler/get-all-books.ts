import { BookEntity, BooksEntity } from 'types/books-types';
import books from '../data/books';
import { HapiReq, HapiResToolkit } from '../types/hapi-types';

type QueryParamsGetAllBooks = {
  name: string | undefined;
  reading: '0' | '1' | undefined;
  finished:'0' | '1' | undefined;
};

const logicQueryFilteredBooks = (
  book: BookEntity,
  { name, reading, finished }:QueryParamsGetAllBooks,
) => {
  if (name) {
    return book.name.toLowerCase().includes(name.toLowerCase());
  }

  if (reading) {
    if (reading === '0' || reading === '1') {
      const readingParseNum = parseInt(reading, 10); // * 1 = true, 0 = false;
      const isReading = Boolean(readingParseNum).valueOf();

      return isReading === book.reading;
    }

    return true;
  }

  if (finished) {
    if (finished === '0' || finished === '1') {
      const finishedParseNum = parseInt(finished, 10); // * 1 = true, 0 = false;
      const isFinished = Boolean(finishedParseNum).valueOf();

      return isFinished === book.finished;
    }
    return true;
  }
  return true;
};

const getAllBooks = (request: HapiReq, h: HapiResToolkit) => {
  const { name, reading, finished } = request.query as QueryParamsGetAllBooks;

  const filteredBooks: BooksEntity = books.filter(
    (book) => logicQueryFilteredBooks(book, { name, reading, finished }),
  ).map((book) => ({
    id: book.id,
    name: book.name,
    publisher: book.publisher,
  }));

  return h.response({
    status: 'success',
    data: {
      books: filteredBooks,
    },
  }).code(200);
};

export default getAllBooks;
