import { Component, OnInit, Input } from '@angular/core';
import { Data } from "../fetch-data.service";

@Component({
  selector: 'app-giff-card',
  templateUrl: './giff-card.component.html',
  styleUrls: ['./giff-card.component.css']
})
export class GiffCardComponent implements OnInit {

  constructor() { }

  @Input() giff: Data = {
    type: "",
    id: "",
    url: "",
    title: "",
    embed_url: "",
    images: {},
  };

  ngOnInit(): void {
    console.log(this.giff);
  }

}
