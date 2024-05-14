import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('home').then((c) => c.HomeComponent),
  },
  {
    path: 'users',
    loadComponent: () => import('users').then((c) => c.UsersComponent),
    children: [
      {
        path: ':id',
        loadComponent: () => import('users').then((c) => c.UserDetailComponent),
      },
    ],
  },
];
