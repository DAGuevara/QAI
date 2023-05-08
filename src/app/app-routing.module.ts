import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  {path:'',redirectTo:'login', pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  {path:'dashboard', component:ChatComponent},
  {path:'register',component:RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
