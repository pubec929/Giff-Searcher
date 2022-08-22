import { Component } from '@angular/core';
import { FetchDataService } from './fetch-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'giff-searcher';
  
  constructor(private service: FetchDataService){}

  submitted(query: string){
    this.service.fetch(query);
 
  }
}

