import { Component, OnInit } from '@angular/core';
import * as DATA from '../../../assets/data/viewership.json';
import * as _ from 'lodash';

@Component({
  selector: 'viewership',
  templateUrl: './viewership.component.html',
  styleUrls: ['./viewership.component.scss']
})
export class ViewershipComponent implements OnInit {
  detailData1: any = [];
  detailData2: any = [];
  category: string;
  value: string;

  DATA = DATA;

  constructor() { }

  ngOnInit(): void {
    const data = {
      user_id: DATA[0].user_id,
      platform: DATA[0].platform
    };

    // se supone que el fichero es por cada minuto de un stream ???????

    // 12:00:00 - minutes 36 - 28
    // every minute
    let lastMinute = 0;
    DATA[0].viewership.map((value) => {
        const d = new Date (value[0]);
        // console.log('date', d);
        const min = d.getMinutes();
        // console.log('minutes', min);
        
        if(lastMinute !== min) {
          this.detailData1.push({
            ...data,
            viewership_timestamps: min,
            viewership_viewers: value[1]
          });
          lastMinute = min;
        }
    });

    console.log('detail data', this.detailData1);

    // 12:00:00 - minutes 36 - 28
    // every minute
    let minute = 31;
    let lastSecond = 0;
    DATA[0].viewership.map((value) => {
        const d = new Date (value[0]);
        // console.log('date', d);
        const min = d.getMinutes();
        // console.log('minutes', min);
        const seconds = d.getSeconds();
        
        if(minute === min && lastSecond !== seconds) {
          this.detailData2.push({
            ...data,
            viewership_timestamps: seconds,
            viewership_viewers: value[1]
          });
          lastSecond = seconds;
        }
    });
    console.log('detail data', this.detailData2);
  }

}
