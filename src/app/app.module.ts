import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'; // Import the http client module
import {AppServicesService} from './Services/app-services.service'; // Data manipulation
import { IonicStorageModule } from '@ionic/storage'; // Data persistence, using storage
import { Flashlight } from '@ionic-native/flashlight/ngx'; // Flashlight module, used for nightlight aspect of app

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  // Add HttpClientModule & Storage to the imports array
  // Add Flashlight to the providers array
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, IonicStorageModule.forRoot()],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, AppServicesService, Flashlight],
  bootstrap: [AppComponent],
})
export class AppModule {}
