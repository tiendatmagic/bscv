import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';
import { SignInComponent } from './page/sign-in/sign-in.component';
import { ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { HttpInterceptorService } from './services/http-logger.service';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { PlansComponent } from './page/plans/plans.component';
import { AboutComponent } from './page/about/about.component';
import { FaqComponent } from './page/faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    HomeComponent,
    SignUpComponent,
    SignInComponent,
    DashboardComponent,
    PlansComponent,
    AboutComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  },
    DatePipe,
  provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent]
})
export class AppModule { }
