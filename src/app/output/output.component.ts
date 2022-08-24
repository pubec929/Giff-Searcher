import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { FetchDataService, Data } from "../fetch-data.service";

interface Query {
  q: string,
  limit: number,
  offset: number,
}

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  constructor(private router: Router, private service: FetchDataService) { }

  giffsPerSite = 25;

  outputData?: Data[];
  query: Query = {
    q: "",
    limit: this.giffsPerSite,
    offset: 0
  };

  ngOnInit(): void {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.query.q = this.router.routerState.snapshot.root.queryParamMap.get('query') ?? "";
        this.service.fetch(this.query).subscribe(data => this.outputData = data.data);
      }
    });
  }
}
