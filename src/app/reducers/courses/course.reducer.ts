import { Course } from '../../model/Course';
import { LoadCourses } from '../../actions/courses.actions';


export interface CourseState {
  course: Course[]
}

export function courseReducer(courseState : CourseState, action): CourseState {
  switch (action.type) {
    case LoadCourses:
      return {
        course: action.payload.courses
      };
    default:
      return courseState;
  }
}
