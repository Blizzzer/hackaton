import { Component, OnInit } from '@angular/core';
import {Answer} from '../answer';
import {DataService} from '../data.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  public answers: Answer[];
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService
      .getAll<Answer[]>('posts')
      .subscribe((data: Answer[]) => this.answers = data);
  }

}
