import { Component, Input, Inject, PLATFORM_ID, NgZone, OnDestroy } from '@angular/core';

// amCharts imports
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnDestroy {
  @Input() chartId: string;
  @Input() data: any;
  @Input() category: string;
  @Input() value: string;

  private chart: am4charts.XYChart;

  constructor(@Inject(PLATFORM_ID) private platformId, private zone: NgZone) { }

  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngAfterViewInit(): void {
    // Chart code goes in here
    this.browserOnly(() => {
      am4core.useTheme(am4themes_animated);

      // Chart creation and general settings
      let chart = am4core.create(this.chartId, am4charts.XYChart);
      chart.paddingRight = 20;
      chart.logo.disabled = true;

      // Create axes
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = this.category;
      categoryAxis.renderer.minGridDistance = 50;
      categoryAxis.renderer.grid.template.location = 0.5;
      categoryAxis.startLocation = 0.5;
      categoryAxis.endLocation = 0.5;

      // Create value axis
      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.baseValue = 0;

      // Create series
      let series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = this.value;
      series.dataFields.categoryX =  this.category;
      series.strokeWidth = 2;
      series.tensionX = 0.77;

      // bullet is added because we add tooltip to a bullet for it to change color
      let bullet = series.bullets.push(new am4charts.Bullet());
      bullet.tooltipText = "{valueY}";

      let range = valueAxis.createSeriesRange(series);
      range.value = 0;
      range.endValue = -1000;
      range.contents.stroke = am4core.color("#FF0000");
      range.contents.fill = range.contents.stroke;

      // Add scrollbar
      let scrollbarX = new am4charts.XYChartScrollbar();
      scrollbarX.series.push(series);
      chart.scrollbarX = scrollbarX;

      chart.cursor = new am4charts.XYCursor();

      chart.data = this.data;
      this.chart = chart;
    });
  }

  ngOnDestroy(): void {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

}
