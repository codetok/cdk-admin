
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class MailService {

  public _mails: BehaviorSubject<any>;
  private apiUrl = environment.mailApi;

  get mails() {
    return this._mails.asObservable();
  }

  constructor(private http: HttpClient) {
    this._mails = new BehaviorSubject<any>([]);
  }

  getMails() {
    return this.http.get(this.apiUrl).pipe(map(res => res.toString())); // .json()
    
  }

  send() {
  }

  delete() {
  }

  save() {
  }

}
