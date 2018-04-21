import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import {DataService} from './data.service';
import {Configuration} from './constants';
import { AppRoutingModule } from './/app-routing.module';
import { AnswerComponent } from './answer/answer.component';
import { QuestionComponent } from './question/question.component';
import { LecturesComponent } from './lectures/lectures.component';
import { AddLectureComponent } from './add-lecture/add-lecture.component';
import { LecturesListComponent } from './lectures-list/lectures-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AnswerComponent,
    QuestionComponent,
    LecturesComponent,
    AddLectureComponent,
    LecturesListComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DataService, Configuration],
  bootstrap: [AppComponent]
})
export class AppModule { }
