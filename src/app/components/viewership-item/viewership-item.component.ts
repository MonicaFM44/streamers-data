import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'viewership-item',
  templateUrl: './viewership-item.component.html',
  styleUrls: ['./viewership-item.component.scss']
})
export class ViewershipItemComponent {
  @Input() data: any;
  @Input() chartId: string;

}
