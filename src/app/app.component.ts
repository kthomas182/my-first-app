import { Component, OnInit } from '@angular/core';
// @ts-ignore
import LogRocket from 'logrocket';
import { select, Store } from '@ngrx/store';
import { Decrement, Increment } from './actions/counter.actions';
import { AppState } from './reducers';
import { Observable } from 'rxjs';
import { getCount } from './selectors/counter.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-first-app';
  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    // futur selector here
  }
  decrement(): void {
    this.store.dispatch(new Decrement());
  }
  increment(): void {
    this.store.dispatch(new Increment());
  }

  ngOnInit(): void {
    // LogRocket.init('9lhpzm/my-first-app');
    this.count$ = this.store.pipe(select(getCount));
  }
}
