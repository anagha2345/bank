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
  this.ds.register(user,acnum,pswrd).subscribe((result:any)=>{
    alert(result.message)
    this.routes.navigateByUrl("")
  },
  result=>{
    alert(result.error.message)
    this.routes.navigateByUrl("")
  }
  )
}
else{
  alert('invalid form')
}
}
}
