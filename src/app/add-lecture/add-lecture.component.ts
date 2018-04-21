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

  constructor(private _dataService: DataService, private location: Location) {
    /*this.lectureToSend.name = 'f';
    this.lectureToSend.day = 'f';
    this.lectureToSend.startHour = 'f';
    this.lectureToSend.endHour = 'f';*/
  }

  ngOnInit() {
  }
  goAdd(): void {
    this._dataService.post(this.lectureToSend, 'lectures').then(() => location);
  }
  goBack(): void {
    this.location.back();
  }

}
