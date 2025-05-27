export interface IBook {
   type: 'book'
   url: string;
   name: string;
   authors: string[];
   released: string;
}

export interface IBooksState {
   books: IBook[];
   loading: boolean;
   error: string | null;
}

