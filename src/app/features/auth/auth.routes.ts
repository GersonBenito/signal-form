import { Routes } from "@angular/router";

export const AUTH_ROUTES: Routes = [
    {
        path: 'login',
        title: 'Login',
        loadComponent: () => import('@features/auth/login/login').then(m => m.Login)
    },
    {
        path: 'register',
        title: 'Register',
        loadComponent: () => import('@features/auth/register/register').then(m => m.Register)
    }
];