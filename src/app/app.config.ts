import { ApplicationConfig, isDevMode } from "@angular/core";
import { provideRouter } from "@angular/router";
import { appRoutes } from "./app.routes";
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { characterReducer } from "./store/characters/characters.reducer";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { BooksEffects, booksReducer, favoritesReducer, HousesEffects, housesReducer } from "./store";

export const appConfig: ApplicationConfig = {
   providers: [
      provideRouter(appRoutes),
      provideStore({
         books: booksReducer,
         characters: characterReducer,
         houses: housesReducer,
         favorites: favoritesReducer
      }),
      provideEffects([BooksEffects, HousesEffects]),
      provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
      provideHttpClient(withInterceptorsFromDi())
   ],
};
