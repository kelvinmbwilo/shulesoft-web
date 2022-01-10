import {
  Action,
  ActionReducerMap,
  combineReducers,
  createFeatureSelector,
  MetaReducer
} from '@ngrx/store';
import { InjectionToken } from '@angular/core';
import * as fromRouter from '@ngrx/router-store';
import { environment } from '../../environments/environment';
import {RouterStateUrl} from './router/router.reducer';

export interface ApplicationState {
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<ApplicationState> = {
  routerReducer: fromRouter.routerReducer,
}
export const reducerToken = new InjectionToken<ActionReducerMap<ApplicationState>>(
  'Reducers'
);

export function getReducers() {
  return {
    ...reducers
  };
}

export const reducerProvider = [
  { provide: reducerToken, useFactory: getReducers }
];

export const metaReducers: MetaReducer<ApplicationState>[] = !environment.production
  ? [clearState]
  : [clearState];

export const getRouteState = createFeatureSelector<
  fromRouter.RouterReducerState<RouterStateUrl>
  >('routerReducer');

export function clearState(reducer: (arg0: any, arg1: any) => any) {
  return (state: any, action: any) => {

    if (action.type === ActionTypes.LOGOUT) {
      state = undefined;
    }

    return reducer(state, action);
  };
}

export class ActionTypes {
  static LOGOUT = '[App] logout';
}

export class Logout implements Action {
  readonly type = ActionTypes.LOGOUT;
}
