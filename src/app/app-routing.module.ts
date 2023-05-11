import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ChatComponent } from './chat/chat.component';

const routes:Routes=[

  {path:'',redirectTo:'chat', pathMatch:'full'},
  {path:'chat', component:ChatComponent},
  {path:'about', component:AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
