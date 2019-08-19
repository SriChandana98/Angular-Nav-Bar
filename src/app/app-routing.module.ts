import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { IfComponent } from './if/if.component';
import { ForComponent } from './for/for.component';
import { SwitchComponent } from './switch/switch.component';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
{path:"login/:id", component:LoginComponent},
{path:"register", component:RegisterComponent},
{path:"if", component:IfComponent},
{path:"for",component:ForComponent},
{path:"switch",component:SwitchComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
