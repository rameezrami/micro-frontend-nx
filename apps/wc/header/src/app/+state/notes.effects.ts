import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, concatMap } from 'rxjs/operators';


import { HeaderApiService } from '../services/header-api.service';

import * as NotesActions from './notes.actions';

@Injectable()
export class NotesEffects {
  constructor(
    private readonly actions$: Actions,
    private headerApiService: HeaderApiService
  ) {}

  fetchNotes$ = createEffect(():any =>
    this.actions$.pipe(
      ofType(NotesActions.loadNotes),
      concatMap((params:any) =>
        this.headerApiService.getNotes(params.loanNumber).pipe(
          map((response:any) => {
            return NotesActions.loadNotesSuccess({ notes: response })
          }),
          catchError(error => of(NotesActions.loadNotesFailure(error))),
        ),
      ),
    ),
  );

}
