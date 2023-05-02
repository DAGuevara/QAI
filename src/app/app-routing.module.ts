import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [

  {path:'',redirectTo:'login', pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  {path:'dashboard', component:ChatComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
