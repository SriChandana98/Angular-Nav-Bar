import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  person:string;
  username:string;
  password:string;
  login(){
    if(this.password=="admin"){
      this.person=this.username;
    }
    else{
      this.person=this.username;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
