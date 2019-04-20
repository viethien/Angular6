import { Action } from '@ngrx/store';
import { Course } from '../model/Course';

export enum CoursesActionTypes {
  LoadCourses = '[Courses] Load Courses',

}

export class LoadCourses implements Action {
  readonly type = CoursesActionTypes.LoadCourses;

  constructor(readonly payload: {courses: Course[]}){}
}


export type CoursesActions = LoadCourses;
