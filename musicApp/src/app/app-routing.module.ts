import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserListComponent } from './user-list/user-list.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'user', component: UserPageComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'admin', component: UserListComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
