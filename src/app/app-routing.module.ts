import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SlackComponent } from './slack/slack.component';

const routes: Routes = [
  // { path: '' ,component: LoginComponent},
  { path: '' ,component: SlackComponent},
  { path: 'home' ,component: SlackComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
