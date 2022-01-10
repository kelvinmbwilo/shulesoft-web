import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as fromActions from './exam.actions';
import {switchMap, tap} from 'rxjs/operators';

@Injectable()
export class ExamEffects {

  loadData$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.getExams),
    tap((e) => console.log(e))
  ));

  constructor(
    private actions$: Actions,
  ) {}
}
