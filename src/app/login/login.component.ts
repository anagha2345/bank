import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  data="Your perfect banking partner"
  inputplaceholder="Account number"
  acno=''
  psw=''
 
  constructor(private router:Router,private ds:DataService){}
  ngnOnInit():void{
  
  } 
  login(){
    var acnum=this.acno
    var pswd=this.psw
    var userDetails=this.ds.userDetails
    if(acnum in userDetails){
        if(pswd==userDetails[acnum]["password"]){
          alert("log in success")
          this.router.navigateByUrl("dashboard")
        }
        else{
          alert("password incorrect")
        }
    }
    else{
      alert("incorrect account number or not registered yet")
    }
   }
  // login(a:any,b:any){
  //   var acnum=a.value
  //   var pswd=b.value
  //   // var acnum=this.acno
  //   // var pswd=this.psw
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
//  acnochange(event:any){
//   this.acno=event.target.value
//   // console.log(this.acno);
  
//  }
// pswchange(event:any){
//  this.psw=event.target.value
// //  console.log(this.psw);
 
// }
}
