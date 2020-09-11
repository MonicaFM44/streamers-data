import { Component, OnInit } from '@angular/core';
import * as DATA from '../../../assets/data/aggregated_stats.json';

@Component({
  selector: 'global-analytics',
  templateUrl: './global-analytics.component.html',
  styleUrls: ['./global-analytics.component.scss']
})
export class GlobalAnalyticsComponent implements OnInit {
  globalMinutesWatched: number;
  globalAirtimeMinutes: number;
  globalAverageViewers: number;

  DATA = DATA;

  constructor() { }

  ngOnInit(): void {
    this.globalMinutesWatched = DATA.team_global_aggregates.minutes_watched;
    this.globalAirtimeMinutes = DATA.team_global_aggregates.global_airtime_minutes;
    this.globalAverageViewers = DATA.team_global_aggregates.average_viewers;
  }

}
