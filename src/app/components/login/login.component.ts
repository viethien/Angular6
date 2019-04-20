import { Component , OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers/store';
import { LoggedInAction } from '../../actions/auth.actions';
import { User } from '../../model/User';
import { LoadCourses } from '../../actions/courses.actions';
import { Router } from '@angular/router';


@Component ( {
  selector :'app-login' ,
  templateUrl :'./login.component.html',
  styleUrls :['./login.component.css']
} )
export class LoginComponent implements OnInit {
  username: string = 'username';
  password: string = 'password';

  constructor (private store: Store<AppState>, private route : Router) {
  }

  ngOnInit () {
  }

  login () {
    if (this.username === 'Iftekhar' && this.password === 'Sunny') {
      const user: User = {
        'id' :1 ,
        'name' :'Iftekhar'
      };
      this.store.dispatch ( new LoggedInAction ( {user} ) );
      this.route.navigateByUrl('courses');
    }
    const courses = [
      {
        'id' :1 ,
        'name' :'Course 1'
      }
    ];
    this.store.dispatch ( new LoadCourses ( {courses} ) );
    this.route.navigateByUrl('/courses').catch(err=>{
      console.log(err);
    })
  }
}
