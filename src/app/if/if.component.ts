import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.css']
})
export class IfComponent implements OnInit {

  constructor() { }
  username:string;
  password:string;
  LoginStatus:string;
  show :boolean=true;
  login(){
  
  this.show= !this.show;
  }
  

  ngOnInit() {
  }

}
