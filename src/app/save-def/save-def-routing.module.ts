import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaveDefPage } from './save-def.page';

const routes: Routes = [
  {
    path: '',
    component: SaveDefPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaveDefPageRoutingModule {}
