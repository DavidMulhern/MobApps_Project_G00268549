import { Component, OnInit } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight/ngx'; // Import and make flashlight available

@Component({
  selector: 'app-nightlight',
  templateUrl: './nightlight.page.html',
  styleUrls: ['./nightlight.page.scss'],
})
export class NightlightPage implements OnInit {

  constructor(private flashlight: Flashlight) { }

  ngOnInit() {
  }

  // Fucntion called in .html uses the flaslight, toggle on and off
  lightSwitch(){
    this.flashlight.toggle();
  }

}
