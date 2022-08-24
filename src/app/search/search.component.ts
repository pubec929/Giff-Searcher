import { Component, OnDestroy, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchError = false;
  queryText: string = "";

  constructor(private router: Router,private ac: ActivatedRoute) { }

  ngOnInit(): void {
    this.queryText = this.router.routerState.snapshot.root.queryParamMap.get('query') ?? "";
    console.log(this.ac.queryParams);
  }

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
    this.router.navigate([], {
      queryParams: {
        query: query,
      },
      skipLocationChange: false
    });


    return false;
  }
}