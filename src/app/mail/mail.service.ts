import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map'

@Injectable()
export class MailService {

  public _mails: BehaviorSubject<any>;
  private apiUrl = environment.mailApi;

  get mails() {
    return this._mails.asObservable();
  }

  constructor(private http: Http) {
    this._mails = new BehaviorSubject<any>([]);
  }

  getMails() {
    return this.http.get(this.apiUrl).map(res => res.json());
    
  }

  send() {
  }

  delete() {
  }

  save() {
  }

}
