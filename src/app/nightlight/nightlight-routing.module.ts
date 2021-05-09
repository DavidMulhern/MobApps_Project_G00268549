import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NightlightPage } from './nightlight.page';

const routes: Routes = [
  {
    path: '',
    component: NightlightPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NightlightPageRoutingModule {}
