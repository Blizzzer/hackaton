import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  public isCollapsed = true;
  constructor(private location: Location) { }

  ngOnInit() {

  }
  goBack(): void {
    this.location.back();
  }
}
