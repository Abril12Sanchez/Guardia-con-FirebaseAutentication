import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {
        path:'',
        component: LoginComponent
    },
    {
        path:'home',
        component: HomeComponent, 
        canActivate: [authGuard],
    },
    {
        path:'**',
        redirectTo:''
    }
];
