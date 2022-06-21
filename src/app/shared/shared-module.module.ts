import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layouts/admin/header/header.component';
import { AdminLayoutsComponent } from './layouts/admin/admin-layouts.component';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './layouts/auth/auth.component';
import { BlankLayoutsComponent } from './layouts/blank/blank.component';

const components = [
  HeaderComponent,
  AdminLayoutsComponent,
  AuthComponent,
  BlankLayoutsComponent,
];
@NgModule({
  declarations: components,
  imports: [CommonModule, RouterModule],
  exports: components,
})
export class SharedModule {}
