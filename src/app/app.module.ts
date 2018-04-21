import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {FormsModule} from "@angular/forms";

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
import { QuestionListComponent } from './question-list/question-list.component';
import { SendQuestionListComponent } from './send-question-list/send-question-list.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { StatisticsComponent } from './statistics/statistics.component';


@NgModule({
  declarations: [
    AppComponent,
    AnswerComponent,
    QuestionComponent,
    LecturesComponent,
    AddLectureComponent,
    LecturesListComponent,
    QuestionListComponent,
    SendQuestionListComponent,
    AddQuestionComponent,
    StatisticsComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService, Configuration],
  bootstrap: [AppComponent]
})
export class AppModule { }
