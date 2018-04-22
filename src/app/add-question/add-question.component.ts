import { Component, OnInit } from '@angular/core';
import {Question} from "../question";
import {Location} from "@angular/common";
import {DataService} from "../data.service";
import {LectureToSend} from "../lectureToSend";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  public question: Question;
  public text: string;
  public lectureId: number;
  public firstAnswer: string;
  public secondAnswer: string;
  public thirdAnswer: string;
  public fourthAnswer: string;
  public correctAnswer: number;
  constructor(private route: ActivatedRoute, private _dataService: DataService, private location: Location) { }

  ngOnInit() {
  }
  goAdd(): void {
    this.lectureId = +this.route.snapshot.paramMap.get('id');

    this.question = new Question(this.text, 0,this.lectureId,this.firstAnswer,this.secondAnswer,this.thirdAnswer, this.fourthAnswer, this.correctAnswer)
    console.log(this.question);
    this._dataService.postQuestion(this.question, 'questions').then(() => location);
    window.location.reload()
  }
  goBack(): void {
    this.location.back();
  }
  setCorrect(correct: number){
    this.correctAnswer = correct;
  }

}
