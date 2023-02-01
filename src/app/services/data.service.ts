import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  userDetails:any={
    1000:{acno:1000,username:"anu",password:"123",balance:0},
    1001:{acno:1001,username:"vinz",password:"1234abc",balance:0},
    1002:{acno:1002,username:"karishma",password:"1234abc",balance:0},
    1003:{acno:1003,username:"sree",password:"1234abc",balance:0}
  }
}
