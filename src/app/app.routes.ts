import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import ('@features/auth/auth.routes').then(m => m.AUTH_ROUTES)
    },
    {
        path: '**',
        loadComponent: () => import ('@features/not-found/not-found').then(m => m.NotFound)
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'auth/login'
    }
];
