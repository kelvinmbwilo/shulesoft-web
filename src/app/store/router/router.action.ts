import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

export const GO = '[Router] Go';
export const BACK = '[Router] Back';
export const ERROR_HAPPENED = '[REQEUST] Error Happened';
export const FORWARD = '[Router] Forward';

export class Go implements Action {
  readonly type = GO;
  constructor(
    public payload: {
      path: any[];
      query?: object;
      extras?: NavigationExtras;
    }
  ) {}
}

export class Back implements Action {
  readonly type = BACK;
}

export class Forward implements Action {
  readonly type = FORWARD;
}

export class ErrorOccurred implements Action {
  readonly type = ERROR_HAPPENED;
  constructor(
    public payload: {
      message: string,
      action?: string,
      showDialog?: boolean,
      afterAction?: any
    }) {}
}

export type Actions = Go | Back | Forward | ErrorOccurred;
