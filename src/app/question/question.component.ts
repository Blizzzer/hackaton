import { Component, OnInit } from '@angular/core';
import {Question} from '../question';
import { DataService} from '../data.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  public questions: Question[];
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService
      .getAll<Question[]>()
      .subscribe((data: Question[]) => this.questions = data);
  }

}
