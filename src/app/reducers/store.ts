import { ActionReducerMap , MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { AuthState , reducer } from './login/login-reducer.reducer';
import { courseReducer , CourseState } from './courses/course.reducer';

export interface AppState {
  auth: AuthState,
  course: CourseState
}

export const reducers: ActionReducerMap<AppState> = {
    auth: reducer,
    course: courseReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
