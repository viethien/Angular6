import { Action } from '@ngrx/store';
import { User } from '../model/User';

export enum AuthAction {
  LoggedOut = '[Auth] LoggedOut',
  LoggedIn = '[Auth] LoggedIn'
}

export class LoggedInAction implements Action {
  readonly type = AuthAction.LoggedIn;
  constructor(public payload: {user: User}){
  }
}

export class LoggedOutAction implements Action {
  readonly type = AuthAction.LoggedOut;
}


export type AuthActions = LoggedInAction | LoggedOutAction;
