import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './services/auth.guard';

export const routes: Routes = [
     { path: '', component: LoginComponent },
     {
          path: '', component: LayoutComponent, canActivate: [AuthGuard], children: [
               { path: 'home', component: HomeComponent }, // Add your other routes here
               // More routes
          ]
     },
     { path: '**', redirectTo: 'login' } // Fallback route
];
