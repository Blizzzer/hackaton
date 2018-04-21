import {Component, Input, OnInit} from '@angular/core';
import {Question} from "../question";
import {DataService} from "../data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  public questions: Question[];
  public lectureID: number;
  constructor(private route: ActivatedRoute, private _dataService: DataService) { }
  ngOnInit() {
    this.getLecture();
    console.log('cos');
    console.log(this.lectureID);
    this._dataService
      .getAll<Question[]>('questions?lectureId=' + this.lectureID + '&published=false')
      .subscribe((data: Question[]) => this.questions = data);
  }
  getLecture(): void {
    this.lectureID = +this.route.snapshot.paramMap.get('id');
  }

}
