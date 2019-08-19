import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  sub:any;
  routeParam;
  totalParams;
  constructor(private pObjRoute:ActivatedRoute) { 
    this.sub=this.pObjRoute.params.subscribe(params => {
      this.routeParam=params['id']
      this.totalParams=params;
    });
  }
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
 alert("welcome "+this.routeParam);
  
}
else{
  this.show=false;
}
}
}
