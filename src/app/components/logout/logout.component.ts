import { Component , OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers/store';
import { LoggedOutAction } from '../../actions/auth.actions';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state=> state.auth!=undefined ? this.isLoggedIn = state.auth.loggedIn : this.isLoggedIn= false );
  }

  logout(){
    this.store.dispatch(new LoggedOutAction());
  }
}
