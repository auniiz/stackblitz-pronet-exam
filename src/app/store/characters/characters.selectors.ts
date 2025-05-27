import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ICharacter } from "../../models";
import { ICharacterState } from "./characters.reducer";


export const selectCharactersState = createFeatureSelector<ICharacterState>('characters');

export const selectAllCharacters = createSelector(selectCharactersState, (state): ICharacter[] => state.characters);