import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.scss']
})
export class KpiComponent {
  @Input() title: string;
  @Input() value: number;

}
