import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  data="Your perfect banking partner"
  inputplaceholder="Account number"
  // acno=''
  // psw=''
  userDetails:any={
    1000:{acno:1000,username:"anu",password:"123",balance:0},
    1001:{acno:1001,username:"vinz",password:"1234abc",baakance:0},
    1002:{acno:1002,username:"kari",password:"1234abc",baakance:0},
    1003:{acno:1003,username:"sree",password:"1234abc",baakance:0}
  }
  constructor(){}
  ngnOnInit():void{
  
  } 
  // login(){
  //   var acnum=this.acno
  //   var pswd=this.psw
  //   var userDetails=this.userDetails
  //   if(acnum in userDetails){
  //       if(pswd==userDetails[acnum]["password"]){
  //         alert("log in success")
  //       }
  //       else{
  //         alert("password incorrect")
  //       }
  //   }
  //   else{
  //     alert("incorrect account number or not registered yet")
  //   }
  //  }
  login(a:any,b:any){
    var acnum=a.value
    var pswd=b.value
    // var acnum=this.acno
    // var pswd=this.psw
    var userDetails=this.userDetails
    if(acnum in userDetails){
        if(pswd==userDetails[acnum]["password"]){
          alert("log in success")
        }
        else{
          alert("password incorrect")
        }
    }
    else{
      alert("incorrect account number or not registered yet")
    }
   }
//  acnochange(event:any){
//   this.acno=event.target.value
//   // console.log(this.acno);
  
//  }
// pswchange(event:any){
//  this.psw=event.target.value
// //  console.log(this.psw);
 
// }
}
