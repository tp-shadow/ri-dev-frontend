import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthLayoutComponent } from './authentication/auth-layout/auth-layout.component';
import { LoginComponent } from './authentication/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardLayoutComponent } from './dashboard/dashboard-layout/dashboard-layout.component';
import { ClientsComponent } from './dashboard/clients/clients.component';
import { RegisterComponent } from './authentication/register/register.component';
import { ForgotComponent } from './authentication/forgot/forgot.component';
import { ReportsComponent } from './dashboard/reports/reports.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    AuthLayoutComponent,
    LoginComponent,
    DashboardComponent,
    DashboardLayoutComponent,
    ClientsComponent,
    RegisterComponent,
    ForgotComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
