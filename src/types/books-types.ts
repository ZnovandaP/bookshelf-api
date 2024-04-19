export type BookEntity = {
  id: string
  name: string
  publisher: string
};

export type BookDetailEntity = BookEntity & {
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

export type BoooksEntity = BookEntity[];
