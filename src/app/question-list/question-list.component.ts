import {Component, Input, OnInit} from '@angular/core';
import {Question} from "../question";
import {DataService} from "../data.service";
import {ActivatedRoute} from "@angular/router";
import {DownloadedQuestion} from "../downloaded-question";


@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  public questions: DownloadedQuestion[];
  public lectureID: number;

  constructor(private route: ActivatedRoute, private _dataService: DataService) {
  }



  ngOnInit() {
    this.getLecture();
    console.log('cos');
    console.log(this.lectureID);
    this._dataService
      .getAll<DownloadedQuestion[]>('questions?lectureId=' + this.lectureID + '&published=0')
      .subscribe((data: DownloadedQuestion[]) => this.questions = data);
  }

  getLecture(): void {
    this.lectureID = +this.route.snapshot.paramMap.get('id');
  }

  delete(id: number) {
    console.log('questions/' + id);
    this._dataService.deleteQuestion('questions/' + id)
  }

  send(id: number) {
    console.log('questions/' + id + '/publish');
    this._dataService.sendQuestion('questions/' + id + '/publish');
  }
}
