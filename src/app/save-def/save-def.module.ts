import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaveDefPageRoutingModule } from './save-def-routing.module';

import { SaveDefPage } from './save-def.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaveDefPageRoutingModule
  ],
  declarations: [SaveDefPage]
})
export class SaveDefPageModule {}
