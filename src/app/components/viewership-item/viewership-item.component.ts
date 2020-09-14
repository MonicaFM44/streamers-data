import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'viewership-item',
  templateUrl: './viewership-item.component.html',
  styleUrls: ['./viewership-item.component.scss']
})
export class ViewershipItemComponent implements OnInit {
  @Input() data: any;
  @Input() user: string;
  @Input() platform: string;
  @Input() chartId: string;

  detailData: any = [];
  category: string;
  value: string;


  constructor() { }

  ngOnInit(): void {
    // console.log('data item', this.data);
    // 12:00:00 - minutes 36 - 28
    // every minute
    let lastMinute = new Date(this.data[0][0]).getMinutes();
    // console.log('first minute', lastMinute);
    let totalViewers = 0;
    let numberTimestamps = 0;
    this.data.map((value) => {
        const d = new Date (value[0]);
        const min = d.getMinutes();
        // console.log('current minute', min);
        
        if(lastMinute === min) {
          // console.log('same minute, acumulate');
          totalViewers += value[1];
          ++numberTimestamps;
        } else {
          // console.log('different minute, push');
          this.detailData.push({
            viewership_timestamps: lastMinute,
            viewership_viewers: (totalViewers/numberTimestamps) * 1000
          });
          lastMinute = min;
          totalViewers = 0;
          numberTimestamps = 0;
        }
    });

    // for last value
    this.detailData.push({
      viewership_timestamps: lastMinute,
      viewership_viewers: (totalViewers/numberTimestamps) * 1000
    });

    // console.log('detail data', this.detailData);
  }

}
