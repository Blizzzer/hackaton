import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {AnswerComponent} from './answer/answer.component';
import {QuestionComponent} from './question/question.component';

const routes: Routes = [{
  path: 'answers', component: AnswerComponent
}, {path: 'questions', component: QuestionComponent
}];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
