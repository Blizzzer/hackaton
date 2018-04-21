import { Component, OnInit } from '@angular/core';
import {Question} from "../question";
import {DataService} from "../data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-send-question-list',
  templateUrl: './send-question-list.component.html',
  styleUrls: ['./send-question-list.component.css']
})
export class SendQuestionListComponent implements OnInit {
  public questions: Question[];
  public lectureID: number;
  constructor(private route: ActivatedRoute, private _dataService: DataService) { }
  ngOnInit() {
    this.getLecture();
    console.log('cos');
    console.log(this.lectureID);
    this._dataService
      .getAll<Question[]>('questions?lectureId=' + this.lectureID + '&published=1')
      .subscribe((data: Question[]) => this.questions = data);
  }
  getLecture(): void {
    this.lectureID = +this.route.snapshot.paramMap.get('id');
  }
}
