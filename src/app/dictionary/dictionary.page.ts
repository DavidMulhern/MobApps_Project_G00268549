import { Component, OnInit } from '@angular/core';
import {AppServicesService} from '../Services/app-services.service'; // import the service class
import { Observable } from 'rxjs'; //import observable object
import {Storage} from '@ionic/storage'; // Import storage 
import {NavController} from '@ionic/angular' // import navigation contorller

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.page.html',
  styleUrls: ['./dictionary.page.scss'],
})
export class DictionaryPage implements OnInit {

  dictionaryData:any = [];
  results: Observable<any>;
  searchTerm: any = '';
  prevSearch:string = "Nothing here";

  // add to constructor in order to be able to invoke
  constructor(private dictionaryService: AppServicesService,private myStorage:Storage, private navCtrl:NavController) { }

  ngOnInit() {
  }

  // Invoke the method a-sync using subscribe() with new word 
  searchChanged() {
    this.dictionaryService.setWord(this.searchTerm); // This will update the 'setWord' variable in services

    this.dictionaryService.getDictionaryData().subscribe(
      (data)=>{
        this.dictionaryData = data;
      }
    ); 
  }

  // Once the word has been saved to storage, it navigates to the homepage using the NavController
  updateSave(){
    this.myStorage.set('savedSearch',this.prevSearch)
    .then(()=>{
      this.navCtrl.navigateBack('/home');
    })
    .catch()
  }

}
