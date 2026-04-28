import { Routes } from '@angular/router';
import { adminGuard } from './core/guards/admin-guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () =>
            import('./features/home/home')
                .then(m => m.Home)
    },
    {
        path: 'admin',
        loadComponent: () =>
            import('./features/admin/admin')
                .then(m => m.Admin),
        canActivate: [adminGuard]
    }
];
