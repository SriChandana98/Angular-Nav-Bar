import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
username:string;
password:string;
LoginStatus:string;
show :boolean=true; 
intialPassword:string;
confrimPassword:string;

validate(){
  if(!(this.intialPassword==this.confrimPassword)){
      alert("passwords are not matched  ");
  }
  else{
    alert("successful registeration")
  }

}
  constructor() { }

  ngOnInit() {
  }

}
