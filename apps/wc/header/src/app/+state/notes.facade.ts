import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as NotesActions from './notes.actions';
import * as NotesSelectors from './notes.selectors';

@Injectable()
export class NotesFacade {
  constructor(private readonly store: Store) {}

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */

  notes$ = this.store.pipe(select(NotesSelectors.getAllNotes));
  notesLoading$ = this.store.pipe(select(NotesSelectors.getNotesLoading));
  notesloaded$ = this.store.pipe(select(NotesSelectors.getNotesLoaded));

  

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */

  loadNotes(loanNumber: string) {
    this.store.dispatch(NotesActions.loadNotes({ loanNumber }));
  }
}
