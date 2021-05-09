import { Component, OnInit } from '@angular/core';
import {AppServicesService} from '../Services/app-services.service'; // import the service class
import { Observable } from 'rxjs'; //import observable object

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

  ThesaurasData:any = [];
  results: Observable<any>;
  searchTerm: any = '';
  
  // add to constructor in order to be able to invoke
  constructor(private thesaurasService: AppServicesService) { }

  ngOnInit() {
  }

  searchChanged() {
    this.thesaurasService.setWord(this.searchTerm); // This will update the 'word' variable in services

    // Invoke the method a-sync using subscribe() with new word
    this.thesaurasService.getThesaurasData().subscribe(
      (data)=>{
        this.ThesaurasData = data[0].meta.syns;
      }
    ); 
  }
}

