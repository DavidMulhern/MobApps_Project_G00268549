import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; // Import the http client
import {Observable} from 'rxjs'; // import observables, make calls a-sync

@Injectable({
  providedIn: 'root'
})
export class AppServicesService {

  urlT = 'https://www.dictionaryapi.com/api/v3/references/thesaurus/json/';
  apiKeyT = 'e08d4453-7c06-462c-be59-fb85b4daf4e3';

  urlD = 'https://dictionaryapi.com/api/v3/references/collegiate/json/';
  apiKeyD = '6b4058cc-dcbe-4ac0-a39c-efc119b622e9';

  word = '';

  // Add the http client to the constructor
  constructor(private http: HttpClient) { }

  // Two below functions retrieve my API data and return an observable
  getThesaurasData():Observable<any>{
    return this.http.get(`${this.urlT}${this.word}?key=${this.apiKeyT}`); // Plug in variables and allows the keyword to change
    
  }

  getDictionaryData():Observable<any>{
    return this.http.get(`${this.urlD}${this.word}?key=${this.apiKeyD}`); // Plug in variables and allows the keyword to change    
  }

  // Sets the word variable, this function is used by two different modules
  setWord(wordIn)
  {
    this.word = wordIn;
  }

}
