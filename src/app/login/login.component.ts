import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  
 
  constructor(private router:Router,private ds:DataService,private fb:FormBuilder){}
  //model form
  loginForm=this.fb.group({
    //validators -this class only validate string
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    psw:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]
  })
  ngOnInit():void{
  
  } 
  login(){
    var acnum=this.loginForm.value.acno
    var pswd=this.loginForm.value.psw
    if(this.loginForm.valid){const result=this.ds.login(acnum,pswd)
   if(result){
    alert("log in success")
    this.router.navigateByUrl("dashboard")
   }
   else{
     alert("incorrect account number or password")
   }
   }else{
    alert('invalid form')
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
