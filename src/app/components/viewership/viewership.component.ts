import { Component, OnInit } from '@angular/core';
import * as DATA from '../../../assets/data/viewership.json';

@Component({
  selector: 'viewership',
  templateUrl: './viewership.component.html',
  styleUrls: ['./viewership.component.scss']
})
export class ViewershipComponent {
  DATA: any = (DATA as any).default;

}
