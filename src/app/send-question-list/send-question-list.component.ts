import { Component, OnInit } from '@angular/core';
import {Question} from "../question";
import {DataService} from "../data.service";
import {ActivatedRoute} from "@angular/router";
import {DownloadedQuestion} from "../downloaded-question";
import {Statistic} from "../statistic";
import {AnswerStatisticResponse} from "../answerStatisticResponse";

@Component({
  selector: 'app-send-question-list',
  templateUrl: './send-question-list.component.html',
  styleUrls: ['./send-question-list.component.css']
})
export class SendQuestionListComponent implements OnInit {
  public questions: DownloadedQuestion[];
  public lectureID: number;
  public selectedQuestionId: number;
  public statistic: Statistic;
  public percent: number[];
  public answersStatistics: AnswerStatisticResponse[];
  constructor(private route: ActivatedRoute, private _dataService: DataService) {
    this.answersStatistics = new Array(4);
    this.percent = new Array(4);
  }
  ngOnInit() {
    this.getLecture();
    console.log('cos');
    console.log(this.lectureID);
    this._dataService
      .getAll<DownloadedQuestion[]>('questions?lectureId=' + this.lectureID + '&published=1')
      .subscribe((data: DownloadedQuestion[]) => this.questions = data);
  }
  getLecture(): void {
    this.lectureID = +this.route.snapshot.paramMap.get('id');
  }
  onSelect(question: DownloadedQuestion): void {
    this.selectedQuestionId = question.id;
    this._dataService
      .getAll('questions/' + this.selectedQuestionId + '/statistics')
      .subscribe((data: Statistic) => {this.statistic = data;
        this.answersStatistics = data.answersStatistics; this.answersStatistics[0].percentOfAnswers = this.answersStatistics[0].numberOfAnswers/this.statistic.answersCount*100;
        this.answersStatistics[1].percentOfAnswers = this.answersStatistics[1].numberOfAnswers/this.statistic.answersCount*100;
        this.answersStatistics[2].percentOfAnswers = this.answersStatistics[2].numberOfAnswers/this.statistic.answersCount*100;
        this.answersStatistics[3].percentOfAnswers = this.answersStatistics[3].numberOfAnswers/this.statistic.answersCount*100;
      });
  }
}
