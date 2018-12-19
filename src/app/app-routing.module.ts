import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { ForgotComponent } from './authentication/forgot/forgot.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientsComponent } from './dashboard/clients/clients.component';
import { ReportsComponent } from './dashboard/reports/reports.component';

const routes: Routes = [
  { path: '', redirectTo: 'user/login', pathMatch: 'full'},
  { path: 'user', redirectTo: 'user/login', pathMatch: 'full'},
  {
    path: 'user',
    children: [
      {
        path: '', component: AuthenticationComponent,
        children: [
          {path: 'login', component: LoginComponent},
          {path: 'register', component: RegisterComponent},
          {path: 'forgot', component: ForgotComponent}
        ]
      }
    ]
  },

  { path: 'dashboard', redirectTo: 'dashboard', pathMatch: 'full'},
  {
    path: 'dashboard',
    children: [
      {
        path: '', component: DashboardComponent,
        children: [
          {path: 'clients', component: ClientsComponent}
        ]
      },
      {
        path: '', component: DashboardComponent,
        children: [
          {path: 'reports', component: ReportsComponent}
        ]
      }
    ]
  }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
