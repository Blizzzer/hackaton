import { Component, OnInit } from '@angular/core';

import {Answer} from './answer';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Best QUIZ by Code KNAB';
  constructor() {
  }
  ngOnInit() {
  }
}
