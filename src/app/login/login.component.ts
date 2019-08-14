import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  username:string;
  password:string;
  LoginStatus:string;
  show :boolean=true;
login(){
if(this.username=="admin"&&this.password=="admin"){
  this.LoginStatus="Login Succesful"
  this.show=true;
  alert(this.LoginStatus);
}
else{
  this.show=false;
}
}
}
