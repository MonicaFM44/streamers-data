import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import * as DATA from '../../../assets/data/viewership.json';

@Component({
  selector: 'viewership',
  templateUrl: './viewership.component.html',
  styleUrls: ['./viewership.component.scss']
})
export class ViewershipComponent implements OnInit {
  users: string[];
  dataToShow: any = [];

  DATA: any = (DATA as any).default;

  ngOnInit(): void {
    this.users = this.DATA.map(val => val.user_id);
    this.selectUser(this.DATA[0].user_id);
  }

  selectUser(user: string) {
    this.dataToShow = [];
    let currentDate: string;
    
    this.DATA
      .filter(val => val.user_id === user)[0].viewership
      .map(val => {
        const d = moment(new Date (val[0]*1000));
        const day = d.format('MMMM DD YYYY');
        
        if(day !== currentDate) {
          currentDate = day;
          this.dataToShow.push({
            day: currentDate,
            views: []
          });

        } else {
          this.dataToShow.find(val => val.day === currentDate).views.push({
            hour: d.format('HH:mm'),
            viewers: val[1]
          })
        }
      });
  }
}
