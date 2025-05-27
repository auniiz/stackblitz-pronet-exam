import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IBook, IHouse } from "../../models";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class BooksService {
   url = 'https://anapioficeandfire.com/api/books';
   constructor(private http: HttpClient) { }

   getAll(): Observable<IBook[]> {
      return this.http.get<IBook[]>(this.url);
   }
}