import { Component, OnInit } from '@angular/core';
import * as DATA from '../../../assets/data/aggregated_stats.json';

@Component({
  selector: 'daily-analytics',
  templateUrl: './daily-analytics.component.html',
  styleUrls: ['./daily-analytics.component.scss']
})
export class DailyAnalyticsComponent implements OnInit {
  detailData: any;
  category: string;
  value: string;

  DATA = DATA;

  constructor() { }

  ngOnInit(): void {
    this.detailData = DATA.team_granular_aggregates;
    this.category = 'date';
  }

}
