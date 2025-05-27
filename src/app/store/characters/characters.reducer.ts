import { createReducer, on } from '@ngrx/store';
import * as CharacterActions from './characters.actions';
import { ICharacter } from '../../models/character.model';

export interface ICharacterState {
   characters: ICharacter[];
   error: any;
}

const initialState: ICharacterState = {
   characters: [],
   error: null,
};

export const characterReducer = createReducer(
   initialState,
   on(CharacterActions.loadCharactersSuccess, (state, { characters }) => ({ ...state, characters })),
   on(CharacterActions.loadCharactersFailure, (state, { error }) => ({ ...state, error })),

);


