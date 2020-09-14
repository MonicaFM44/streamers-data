import { Component } from '@angular/core';
import * as DATA from '../../../assets/data/aggregated_stats.json';

@Component({
  selector: 'daily-analytics',
  templateUrl: './daily-analytics.component.html',
  styleUrls: ['./daily-analytics.component.scss']
})
export class DailyAnalyticsComponent {
  detailData: any;
  category: string;
  value: string;

  dailyMinutesWatched: number;
  dailyAirtimeMinutes: number;
  dailyAverageViewers: number;
  dailyPeakViewers: number;
  primaryGame: string;

  dates: string[] = [];
  users: string[];
  data: any;

  DATA: any = DATA;

  ngOnInit(): void {
    this.detailData = DATA.team_granular_aggregates;
    this.category = 'date';
    DATA.team_granular_aggregates.map(val => this.dates.push(val.date));
    this.selectDay(this.dates[0]);
  }

  selectDay(day: string) {
    this.users = [];
    this.data = DATA.team_granular_aggregates.find(val => val.date === day);
    this.data.streamer_data.map(val => this.users.push(val.display_name));
    this.selectUser(this.users[0]);
  }

  selectUser(user: string) {
    const res = this.data.streamer_data.find(val => val.display_name === user);
    console.log(res);
    this.dailyMinutesWatched = res.minutes_watched;
    this.dailyAirtimeMinutes = res.airtime_minutes;
    this.dailyAverageViewers = res.average_viewers;
    this.dailyPeakViewers = res.peak_viewers;
    this.primaryGame = res.primary_game;
  }

}
