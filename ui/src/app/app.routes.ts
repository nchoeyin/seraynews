import { Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes =  [ { 
    path: '', redirectTo: '/dashboard', pathMatch: 'full',
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'login', component: LoginComponent
  }
]
