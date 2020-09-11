import { Component, OnInit } from '@angular/core';
import * as DATA from '../../../assets/data/aggregated_stats.json';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  dateFrom: string;
  dateTo: string;

  DATA = DATA; // type ?

  constructor() { }

  ngOnInit(): void {
    this.dateFrom = DATA.from;
    this.dateTo = DATA.to;
  }

}
