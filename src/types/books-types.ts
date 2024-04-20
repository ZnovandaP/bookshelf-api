export type BaseBookEntity = {
  id: string
  name: string
  publisher: string
};

export type BookEntity = BaseBookEntity & {
  year: number
  author: string
  summary: string
  pageCount: number
  readPage: number
  finished: boolean
  reading: boolean
  insertedAt: string
  updatedAt: string
};

export type BooksEntity = BaseBookEntity[];
