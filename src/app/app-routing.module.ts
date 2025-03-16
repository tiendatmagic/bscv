import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { SignInComponent } from './page/sign-in/sign-in.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Trang chủ' }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Trang chủ' }
  },
  {
    path: 'sign-in',
    component: SignInComponent,
    data: { title: 'Sign in' }
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    data: { title: 'Sign up' }
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
