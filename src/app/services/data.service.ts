import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//overloading headers as global
const option={
  headers:new HttpHeaders()
} 
@Injectable({
  providedIn: 'root'
})
 




export class DataService {

  currentUser: any
  currentAcno:any
  userDetails:any
  constructor(private http:HttpClient) {
    // this.getData()
   }
  // userDetails: any = {
  //   1000: { acno: 1000, username: "anu", password: "123", balance: 0,transaction:[]},
  //   1001: { acno: 1001, username: "vinz", password: "1234abc", balance: 0,transaction:[] },
  //   1002: { acno: 1002, username: "karishma", password: "1234abc", balance: 0,transaction:[] },
  //   1003: { acno: 1003, username: "sree", password: "1234abc", balance: 0,transaction:[]}
  // }

  saveData(){
    if(this.userDetails){
      localStorage.setItem('database',JSON.stringify(this.userDetails))
    }
    if(this.currentUser){
      localStorage.setItem('currentUser',this.currentUser)     //this is already a string type no need to convert
    }
    if(this.currentAcno){
      localStorage.setItem('currentAcno',JSON.stringify(this.currentAcno))     //some sitation numbers or strings can come so need to convert 
    }
  }
  // getData(){
  //   if(localStorage.getItem('database')){
  //     this.userDetails=JSON.parse(localStorage.getItem('database') ||"")
  //   }
  //   if(localStorage.getItem('currentUser')){
  //     this.currentUser=localStorage.getItem('currentUser')
  //   }
  //   if(localStorage.getItem('currentAcno')){
  //     this.currentAcno=JSON.parse(localStorage.getItem('currentAcno')||"")
  //   }
  // }
 getToken(){
  //access token
  const token=JSON.parse(localStorage.getItem("token")||"")

  //generate header
  let headers=new HttpHeaders()

  if(token){
    //append token in header
 option.headers=headers.append("access_token",token)
  }
  return option
 }
  register(uname: any, acno: any, psw: any) {
  //create body data
  const data={uname,acno,psw}
  return this.http.post("http://localhost:3000/register",data)
  }
  login(acno: any, psw: any) {
  const data={acno,psw}
  return this.http.post("http://localhost:3000/login",data)
   
  }

deposit(acnum: any, password: any, amount: any) {
const data={acnum,password,amount}
return this.http.post("http://localhost:3000/deposit",data,this.getToken())




    // let userDetails = this.userDetails
  
    // //convert string amount to number
    // var amnt = parseInt(amount)
    // if (acnum in userDetails) {
    //   if (password == userDetails[acnum]["password"]) {
    //     //update balance
    //     userDetails[acnum]["balance"] += amnt

    //     //transaction data details 
    //     userDetails[acnum]["transaction"].push({Type:"CREDIT",amount:amnt})
    //     console.log(userDetails);
    //     this.saveData()
    //     //return balance
    //     return userDetails[acnum]["balance"]
    //   }
    //   else {
    //     return false
    //   }
    // }
    // else {
    //   return false
    // }
  }
  withdraw(acnum: any, password: any, amount: any) {

  const data={acnum,password,amount}
  return this.http.post("http://localhost:3000/withdraw",data,this.getToken())




    // let userDetails = this.userDetails
    // //convert string amount to number
    // var amnt = parseInt(amount)
    // if (acnum in userDetails) {
    //   if (password == userDetails[acnum]["password"]) {
    //     if (amnt <= userDetails[acnum]["balance"]) {
    //       //update balance
    //       userDetails[acnum]["balance"] -= amnt
    //       // //transaction data details 
    //     userDetails[acnum]["transaction"].push({Type:"DEBIT",amount:amnt})
    //     console.log(userDetails);
    //     this.saveData()
        
    //       //return balance
    //       return userDetails[acnum]["balance"]
    //     }
    //     else {
    //       alert(`insufficient balance`)
    //       return false
    //     }
    //   }
    //   else {
    //     alert(`incorrect password`)
    //     return false
    //   }
    // }
    // else {
    //   alert(`account number is incorrect`)
    //   return false
    // }
  }
  getTransaction(acno:any){
   const data={acno}
  return this.http.post("http://localhost:3000/transaction",data,this.getToken())
  }
  deleacc(acno:any){
    return this.http.delete("http://localhost:3000/delete/"+acno,this.getToken())
  }
}
