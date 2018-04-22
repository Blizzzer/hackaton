import {Component, Input, OnInit} from '@angular/core';
import {DownloadedQuestion} from "../downloaded-question";
import {DataService} from "../data.service";
import {Question} from "../question";
import {Statistic} from "../statistic";
import {QuestionListComponent} from "../question-list/question-list.component";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  @Input() question: DownloadedQuestion;
  statistic: Statistic;
  constructor(private _dataService: DataService, private _questionList: QuestionListComponent) { }

  ngOnInit() {

    this._dataService
      .getAll<Statistic>('questions/' + this.question.id + '/statistics')
      .subscribe((data: Statistic) => this.statistic = data);
  }

}
