import { Component , OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers/store';
import { LoggedInAction } from '../../actions/auth.actions';
import { User } from '../../model/User';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component ( {
  selector :'app-login' ,
  templateUrl :'./login.component.html',
  styleUrls :['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = 'username';
  password: string = 'password';
  isLoggedIn$ : Observable<boolean>;

  constructor (private store: Store<AppState> , private route: Router) {
  }

  ngOnInit () {
    this.isLoggedIn$ = this.store.pipe(map(state=> state.auth.loggedIn));
  }

  login () {
    if (this.username === 'Iftekhar' && this.password === 'Sunny') {
      const user: User = {
        'id' :1 ,
        'name' :'Iftekhar'
      };
      this.store.dispatch ( new LoggedInAction ( {user} ) );
      /*this.route.navigateByUrl ( 'courses' ).catch ( err => {
        console.log ( err );
      });*/
    }
  }
}
