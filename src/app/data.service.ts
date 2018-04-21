import 'rxjs/add/operator/map';
import {HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Configuration} from './constants';
import {LectureToSend} from "./lectureToSend";
import {RequestOptions} from "@angular/http";
import {Lecture} from "./lecture";
import {Question} from "./question";
import {DownloadedQuestion} from "./downloaded-question";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DataService {
  private actionUrl: string;
  constructor(private http: HttpClient, private _configuration: Configuration) {
    this.actionUrl = _configuration.Server;
  }

  public getAll<Answer>(urlPlace: string): Observable<Answer> {
    return this.http.get<Answer>(this.actionUrl + urlPlace);
  }
  public postLecture(lectureToSend: LectureToSend, urlPlace: string): Promise<LectureToSend> {
    console.log(JSON.stringify(lectureToSend));
    return this.http.post(this.actionUrl + urlPlace, lectureToSend)
      .toPromise()
      .then(() => lectureToSend);
  }
  public postQuestion(question: Question, urlPlace: string): Promise<Question> {
    console.log(JSON.stringify(question));
    return this.http.post(this.actionUrl + urlPlace, question)
      .toPromise()
      .then(() => question);
  }
  getLecture<Lecture>(id: number, urlPlace: string): Observable<Lecture> {
    console.log(this.actionUrl + urlPlace + id);
    return this.http.get<Lecture>(this.actionUrl + urlPlace + id);
  }
  getQuestion<Question>(id: number, urlPlace: string): Observable<Question> {
    console.log(this.actionUrl + urlPlace + id);
    return this.http.get<Question>(this.actionUrl + urlPlace + id);
  }
  sendQuestion(urlPlace: string): Promise<void> {
    console.log(this.actionUrl + urlPlace);
    return this.http.post(this.actionUrl + urlPlace,'{}',httpOptions).toPromise()
      .then(() => null);
  }
  deleteQuestion(urlPlace: string): Promise<void>{
    console.log(this.actionUrl + urlPlace);
    return this.http.delete(this.actionUrl + urlPlace, httpOptions).toPromise()
      .then(() => null);
  }
}

/*@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.headers.has('Content-Type')) {
      req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    }

    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
    console.log(JSON.stringify(req.headers));
    return next.handle(req);
  }
}*/
