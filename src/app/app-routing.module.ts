import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { SignInComponent } from './page/sign-in/sign-in.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { PlansComponent } from './page/plans/plans.component';
import { AboutComponent } from './page/about/about.component';
import { FaqComponent } from './page/faq/faq.component';
import { AppComponent } from './page/app/app.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'plans',
    component: PlansComponent,
    data: { title: 'Plans' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'Plans' }
  },
  {
    path: 'faq',
    component: FaqComponent,
    data: { title: 'Plans' }
  },
  {
    path: 'app',
    component: AppComponent,
    data: { title: 'Plans' }
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
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'Dashboard' }
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
