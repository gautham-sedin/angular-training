import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard')
        .then(m => m.Dashboard)
  },

  {
    path: 'projects',
    loadComponent: () =>
      import('./features/projects/projects')
        .then(m => m.Projects)
  },

  {
    path: 'tasks',
    loadComponent: () =>
      import('./features/task-manager/task-manager')
        .then(m => m.TaskManager),
    canActivate: [authGuard] // guarded route
  }
];