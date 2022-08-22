import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  //@Input() search: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  //renders 25 giffs on the page
  render(data: any) {

  }
}
