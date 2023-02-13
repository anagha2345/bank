import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit{
  
  

  constructor(private ds:DataService,private routes:Router,private fb:FormBuilder){}
  //create reactive form of register form
  registerForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    uname:['',[Validators.required,Validators.pattern('[A-Za-z]+')]],
    psw:['',[Validators.required,Validators.pattern('[0-9A-Za-z]+')]]
  })
  ngOnInit():void{

  }
  register(){
  
  var acnum=this.registerForm.value.acno
  var user=this.registerForm.value.uname
  var pswrd=this.registerForm.value.psw
  if(this.registerForm.valid){


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
  else{
    alert('invalid form')
  }

  }
}
