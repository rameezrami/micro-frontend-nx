import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as NotesActions from './notes.actions';
import { NoteItem } from './notes.models';

export const NOTES_FEATURE_KEY = 'notes';

export interface State extends EntityState<NoteItem> {
  selectedId?: string | number; // which Notes record has been selected
  loaded: boolean; // has the Notes list been loaded
  notes: NoteItem[]|null;
  error?: string | null; // last known error (if any),
  notesLoading: boolean;
}

export interface NotesPartialState {
  readonly [NOTES_FEATURE_KEY]: State;
}

export const notesAdapter: EntityAdapter<NoteItem> =
  createEntityAdapter<NoteItem>();

export const initialState: State = notesAdapter.getInitialState({
  // set initial required properties
  notes:[],
  loaded: false,
  notesLoading: false,
});

const notesReducer = createReducer(
  initialState,
  on(NotesActions.loadNotes, (state, action) => {
    console.log('action',action)
    return {
      ...state,
      notesLoading: true
    }
  }),
  on(NotesActions.loadNotesSuccess, (state, action) => {
    return {
      ...state,
      notes: action.notes,
      notesLoading: false,
      loaded: true
    }
  }),
  on(NotesActions.loadNotesFailure, state => ({
    ...state,
    notes: initialState.notes,
    notesLoading: false,
    loaded: false,
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return notesReducer(state, action);
}
