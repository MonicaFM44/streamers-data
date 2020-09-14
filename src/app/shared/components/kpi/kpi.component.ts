import { Component, Input } from '@angular/core';

@Component({
  selector: 'kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.scss']
})
export class KpiComponent {
  @Input() title: string;
  @Input() value: number;

  isNumber(val: any): boolean { 
    return typeof val === 'number'; 
  }

}
