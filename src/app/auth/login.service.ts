import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  login:boolean=false;
  constructor() { }

  logInFirstTime()
  {
    this.login=true;
  }
  getStatus(){
    return this.login;
  }

}
