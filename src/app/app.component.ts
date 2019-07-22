import { Component, OnInit } from '@angular/core';
// @ts-ignore
import LogRocket from 'logrocket';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-first-app';

  ngOnInit(): void {
    LogRocket.init('9lhpzm/my-first-app');
  }
}
