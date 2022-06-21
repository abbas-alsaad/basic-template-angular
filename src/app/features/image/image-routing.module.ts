import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddImageComponent } from './add-image/add-image.component';
import { ShowImageComponent } from './show-image/show-image.component';

const routes: Routes = [
  {
    path: 'add-image',
    component: AddImageComponent,
  },
  {
    path: 'show-image',
    component: ShowImageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImageRoutingModule {}
