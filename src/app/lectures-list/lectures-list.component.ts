import { Component, OnInit } from '@angular/core';

import {Lecture} from "../lecture";
import {DataService} from "../data.service";

@Component({
  selector: 'app-lectures-list',
  templateUrl: './lectures-list.component.html',
  styleUrls: ['./lectures-list.component.css']
})
export class LecturesListComponent implements OnInit {
  public lectures: Lecture[];
  constructor(private _dataService: DataService) { }

  ngOnInit() {this._dataService
    .getAll<Lecture[]>('lectures')
    .subscribe((data: Lecture[]) => this.lectures = data);

  }

}
