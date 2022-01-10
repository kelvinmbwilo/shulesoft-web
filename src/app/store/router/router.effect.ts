import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

import {createEffect, Actions, ofType} from '@ngrx/effects';
import * as RouterActions from './router.action';

import {tap, map} from 'rxjs/operators';
import {ErrorOccurred} from './router.action';
import {Store} from '@ngrx/store';
import {ApplicationState} from '../index';
import {CommonService} from '../../services/common.service';

@Injectable()
export class RouterEffects {


  navigate$ = createEffect(() => this.actions$.pipe(ofType(RouterActions.GO),
    map((action: RouterActions.Go) => action.payload),
    tap(({path, query: queryParams, extras}) => {
      this.router.navigate(path, {queryParams, ...extras});
    })
  ), {dispatch: false});


  navigateBack$ = createEffect(() => this.actions$.pipe(
    ofType(RouterActions.BACK),
    tap(() => this.location1.back())), {dispatch: false});


  navigateForward$ = createEffect(() => this.actions$.pipe(
    ofType(RouterActions.FORWARD),
    tap(() => this.location1.forward())), {dispatch: false});


  anyNavigation$ = createEffect(() => this.actions$.pipe(
    ofType('@ngrx/router-store/navigation'),
    tap(() => {})), {dispatch: false});

  /**
   * This effect will react to all error occurred in other effects
   * the payload should have the following parameters
   * message: string [required] an error message (mostly from backend service)
   * showDialog: boolean [default: false] if to show error message to user as tooltip
   * action: [optional] the string indicated what user was trying to do, will be appended to error message
   * afterAction [optional] this action will be called when failed if needed
   */

  errorOccured$ = createEffect(() => this.actions$.pipe(
    ofType(RouterActions.ERROR_HAPPENED),
    tap((action: ErrorOccurred) => {
      if (action.payload.showDialog) {
        const message = action.payload.action + ' ' + action.payload.message;
        this.settings.showError(message);
      }
      if (action.payload.afterAction) {
        this.store.dispatch(new action.payload.afterAction());
      }
    })), {dispatch: false});

  constructor(
    private actions$: Actions,
    private router: Router,
    private location1: Location,
    private settings: CommonService,
    private store: Store<ApplicationState>
  ) {
  }
}
