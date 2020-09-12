import { Component, OnInit, ViewContainerRef, TemplateRef, ViewChild, AfterContentInit } from '@angular/core';
import * as _ from 'lodash';
import * as DATA from '../../../assets/data/aggregated_stats.json';

@Component({
  selector: 'global-analytics',
  templateUrl: './global-analytics.component.html',
  styleUrls: ['./global-analytics.component.scss']
})
export class GlobalAnalyticsComponent implements OnInit, AfterContentInit {
  @ViewChild("outlet", {read: ViewContainerRef,  static: true }) outletRef: ViewContainerRef;
  @ViewChild("content", {read: TemplateRef,  static: true }) contentRef: TemplateRef<any>;
  
  globalMinutesWatched: number;
  globalAirtimeMinutes: number;
  globalAverageViewers: number;

  detailData: any;
  category: string;
  value: string;

  DATA = DATA;

  constructor() { }

  ngAfterContentInit(): void {
    this.outletRef.createEmbeddedView(this.contentRef);

    this.selectOption('game');
  }

  ngOnInit(): void {
    this.globalMinutesWatched = DATA.team_global_aggregates.minutes_watched;
    this.globalAirtimeMinutes = DATA.team_global_aggregates.global_airtime_minutes;
    this.globalAverageViewers = DATA.team_global_aggregates.average_viewers;
  }

  selectOption(value: string) {
    console.log('inside select', value);
    if(value === 'game') {
      this.detailData = DATA.team_global_games.slice(0, 5);
      this.category = 'name';
    } else if (value === 'user') {
      this.category = 'user_id';
      this.detailData = DATA.team_global_aggregates.streamer_data;
    } else {
      this.category = 'platform';
      this.detailData = 
      _(DATA.team_global_aggregates.streamer_data)
      .groupBy(x => x.platform)
      .map((value, key) => (
        {
          platform: key, 
          airtime_minutes: value.reduce((acc, val) => acc + val.airtime_minutes, 0),
          minutes_watched: value.reduce((acc, val) => acc + val.minutes_watched, 0)
        }))
      .value();
    }
    this.rerender();
  }


  private rerender() {
    this.outletRef.clear();
    this.outletRef.createEmbeddedView(this.contentRef);
  }

}
