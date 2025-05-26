import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })

export class CharactersService {
   constructor(private http: HttpClient) { }
   private url = 'https://anapioficeandfire.com/api/characters';

   getAll(): Observable<any[]> {
      return this.http.get<any[]>(this.url);
   }
}