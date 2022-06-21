import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGaurd } from './core/auth-gaurd';
import { AdminLayoutsComponent } from './shared/layouts/admin/admin-layouts.component';
import { AuthComponent } from './shared/layouts/auth/auth.component';
import { BlankLayoutsComponent } from './shared/layouts/blank/blank.component';

const adminRoutes: Routes = [
  {
    path: 'image',
    loadChildren: () =>
      import('./features/image/image.module').then((m) => m.ImageModule),
  },
];

const routes: Routes = [
  { path: '', redirectTo: 'image/add-image', pathMatch: 'full' },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'sessions',
        loadChildren: () =>
          import('./features/session/session.module').then(
            (m) => m.SessionModule
          ),
      },
    ],
  },
  {
    path: '',
    component: BlankLayoutsComponent,
    children: [
      {
        path: 'others',
        loadChildren: () =>
          import('./features/others/others.module').then((m) => m.OthersModule),
      },
    ],
  },
  {
    path: '',
    canActivate: [AuthGaurd],
    component: AdminLayoutsComponent,
    children: adminRoutes,
  },
  {
    path: '**',
    redirectTo: 'others/404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
