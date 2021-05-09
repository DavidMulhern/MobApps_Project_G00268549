import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage'; // Import storage 


@Component({
  selector: 'app-save-def',
  templateUrl: './save-def.page.html',
  styleUrls: ['./save-def.page.scss'],
})
export class SaveDefPage implements OnInit {

  savedWord:string = "Empty";

  constructor(private myStorage:Storage) { }

  // Upon page loading, the variable will be populated from item saved in storage
  ngOnInit() {
    this.myStorage.get("savedSearch")
    .then((data)=>{
      this.savedWord=data;
    })
    .catch();
  }

}
