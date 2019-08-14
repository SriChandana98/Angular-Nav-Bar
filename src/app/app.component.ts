import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'heroine';
  logins:boolean=true;
  registers:boolean=true;
  ifs:boolean=true;
  fors:boolean=true;
  switchs:boolean=true;
  login(){
    this.logins=false;
    this.registers=true;
    this.ifs=true;
    this.fors=true;
    this.switchs=true;
  }
  register(){
    this.registers=false;
    this.logins=true;
    this.ifs=true;
    this.fors=true;
    this.switchs=true;
  }
  ifss(){
    this.registers=true;
    this.logins=true;
    this.ifs=false;
    this.fors=true;
    this.switchs=true;
  }
  for(){
    this.registers=true;
    this.logins=true;
    this.ifs=true;
    this.fors=false;
    this.switchs=true;
  }
  switch(){
    this.registers=true;
    this.logins=true;
    this.ifs=true;
    this.fors=true;
    this.switchs=false;
  }
}
