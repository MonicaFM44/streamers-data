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

  ngOnInit(): void {
    // Data goes for some interval of minutes from 12:00:00 (Jan 19 1970?)

    // Get a new minute value
    let lastMinute = new Date(this.data[0][0]).getMinutes();
    // Total viewers for that minute
    let totalViewers = 0;
    // Total timestamps by second for that minute
    let numberTimestamps = 0;

    this.data.map((value) => {
        const d = new Date (value[0]);
        console.log('date', d);
        const min = d.getMinutes();
        
        // Same minute? Accumulate values to calculate the average
        if(lastMinute === min) {
          totalViewers += value[1];
          ++numberTimestamps;
        // New minute value? Push the data for that minute and the average of viewers
        } else {
          this.detailData.push({
            viewership_timestamps: lastMinute,
            viewership_viewers: (totalViewers/numberTimestamps)
          });
          lastMinute = min;
          totalViewers = 0;
          numberTimestamps = 0;
        }
    });

    // Push for last value
    this.detailData.push({
      viewership_timestamps: lastMinute,
      viewership_viewers: (totalViewers/numberTimestamps)
    });
  }

}
