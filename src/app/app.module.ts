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
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NotifymodalComponent } from './modal/notifymodal/notifymodal.component';
import { MatDialogModule } from '@angular/material/dialog';

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
    FaqComponent,
    NotifymodalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  },
    DatePipe,
  provideHttpClient(withInterceptorsFromDi()),
  provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
