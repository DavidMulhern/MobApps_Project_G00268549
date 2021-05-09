import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NightlightPageRoutingModule } from './nightlight-routing.module';

import { NightlightPage } from './nightlight.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NightlightPageRoutingModule
  ],
  declarations: [NightlightPage]
})
export class NightlightPageModule {}
