import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit{
  acn=''
  usn=''
  psw=''

  constructor(private ds:DataService,private routes:Router){}
  ngOnInit():void{

  }
  register(){
  
  var acnum=this.acn
  var user=this.usn
  var pswrd=this.psw


  const result=this.ds.register(user,acnum,pswrd)
  if(result){
    alert("registered")
    this.routes.navigateByUrl("")
  }
  else{
    alert("accont number already present")
  }
  // console.log(acnum,user,pswrd);
  
  }
}
