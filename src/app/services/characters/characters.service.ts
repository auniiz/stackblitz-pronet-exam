import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ICharacter } from "../../models";

@Injectable({ providedIn: 'root' })
export class CharactersService {
   constructor(private http: HttpClient) { }
   private url = 'https://anapioficeandfire.com/api/characters';

   getAll(): Observable<ICharacter[]> {
      return this.http.get<ICharacter[]>(this.url);
   }
}