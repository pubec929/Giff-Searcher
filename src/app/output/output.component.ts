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
  constructor(private route: ActivatedRoute, private router: Router, private service: FetchDataService) { }

  giffsPerSite = 3;

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
        console.log(this.query);
        this.service.fetch(this.query).subscribe(data => this.outputData = data.data);
        console.log("first request", this.query.q);
        console.log(this.outputData);
      }
    });
  }
}
