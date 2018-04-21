import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {AnswerComponent} from './answer/answer.component';
import {QuestionComponent} from './question/question.component';
import {LecturesComponent} from "./lectures/lectures.component";

const routes: Routes = [
  { path: '', redirectTo: '/lectures', pathMatch: 'full' },{
  path: 'answers', component: AnswerComponent
},{path: 'lectures', component: LecturesComponent
},{path: 'lectures/:id', component: QuestionComponent
  }];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
