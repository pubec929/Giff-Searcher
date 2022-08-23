import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private route: Router) { }
  searchError = false;


  isValid(val: string): boolean {
    // checks if val contains any number or letter
    const exp = /[a-zA-Z]|\d/;
    return exp.test(val);
  }

  submitted(query: string) {
    if (!this.isValid(query)) {
      this.searchError = true;
      return false;
    }

    this.searchError = false;
    this.route.navigate([], {
      queryParams: {
        query: query,
      },
      skipLocationChange: false
    });


    return false;
  }
}