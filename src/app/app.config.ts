import { ApplicationConfig, isDevMode } from "@angular/core";
import { provideRouter } from "@angular/router";
import { appRoutes } from "./app.routes";
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { characterReducer } from "./store/characters/characters.reducer";

export const appConfig: ApplicationConfig = {
   providers: [
      provideRouter(appRoutes),
      provideStore({ characters: characterReducer }),
      provideEffects([]),
      provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })

   ],
};
