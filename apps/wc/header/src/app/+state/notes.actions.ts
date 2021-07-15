import { createAction, props } from '@ngrx/store';
import {  NoteItem } from './notes.models';

export const loadNotes = createAction('[Notes] Load Notes', props<{ loanNumber: string }>());
export const loadNotesSuccess = createAction('[Notes/API] Load Notes Success',props<{ notes: NoteItem[] }>());
export const loadNotesFailure = createAction('[Notes/API] Load Notes Failure',props<{ error: Error }>());