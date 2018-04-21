import 'rxjs/add/operator/map';
import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Configuration} from './constants';

@Injectable()
export class DataService {
  private actionUrl: string;
  constructor(private http: HttpClient, private _configuration: Configuration) {
    this.actionUrl = _configuration.Server + 'posts';
  }

  public getAll<Answer>(): Observable<Answer> {
    return this.http.get<Answer>(this.actionUrl);
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
