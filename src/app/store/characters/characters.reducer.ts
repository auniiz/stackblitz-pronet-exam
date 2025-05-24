import { createReducer, on } from '@ngrx/store';
import * as CharacterActions from './characters.actions';
import { Character } from '../../models/character.model';

export interface CharacterState {
   characters: Character[];
   error: any;
}

export const initialState: CharacterState = {
   characters: [],
   error: null,
};

export const characterReducer = createReducer(
   initialState,
   on(CharacterActions.loadCharactersSuccess, (state, { characters }) => ({ ...state, characters })),
   on(CharacterActions.loadCharactersFailure, (state, { error }) => ({ ...state, error })),

);


