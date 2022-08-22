import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  ngOnInit(): void {
  }

  search = "";


  constructor(private service: FetchDataService) { }

  submitted(query: string) {
    this.search = query;
    this.service.fetch(query);


  }
}