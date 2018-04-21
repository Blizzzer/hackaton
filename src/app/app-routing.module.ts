import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {AnswerComponent} from './answer/answer.component';
import {QuestionComponent} from './question/question.component';
import {LecturesComponent} from "./lectures/lectures.component";

const routes: Routes = [
  { path: '', redirectTo: '/lectures', pathMatch: 'full' },{
  path: 'answers', component: AnswerComponent
}, {path: 'questions', component: QuestionComponent
},{path: 'lectures', component: LecturesComponent
}];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
