import { Component, OnInit } from '@angular/core';
import {LectureToSend} from "../lectureToSend";
import {DataService} from "../data.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-add-lecture',
  templateUrl: './add-lecture.component.html',
  styleUrls: ['./add-lecture.component.css']
})
export class AddLectureComponent implements OnInit {
  public lectureToSend: LectureToSend;
  public name: string;
  public days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
  public day: string;
  public startHour: number;
  public finishHour: number;

  constructor(private _dataService: DataService, private location: Location) {
    /*this.lectureToSend.name = 'f';
    this.lectureToSend.day = 'f';
    this.lectureToSend.startHour = 'f';
    this.lectureToSend.endHour = 'f';*/
  }

  ngOnInit() {
  }
  goAdd(): void {
    this.lectureToSend = new LectureToSend(this.name, this.day, this.startHour, this.finishHour);
    console.log(this.lectureToSend);
    this._dataService.postLecture(this.lectureToSend, 'lectures').then(() => location);
    window.location.reload();
  }
  goBack(): void {
    this.location.back();
  }

}
