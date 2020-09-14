import { Component, OnDestroy, Inject, NgZone, PLATFORM_ID, AfterViewInit, Input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// amCharts imports
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements AfterViewInit, OnDestroy {
  @Input() chartId: string;
  @Input() isHorizontal: boolean;
  @Input() isSorted: boolean;
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

      let chart = am4core.create(this.chartId, am4charts.XYChart);
      chart.padding(40, 40, 40, 40);
      chart.logo.disabled = true;

      let categoryAxis;
      if (this.isHorizontal) {
        categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = this.category;
      } else {
        categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = this.category;
        categoryAxis.renderer.fontSize = 10;
      }
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.minGridDistance = 1;
      categoryAxis.renderer.inversed = true;
      categoryAxis.renderer.grid.template.disabled = true;

      let valueAxis;
      this.isHorizontal ? 
        valueAxis = chart.xAxes.push(new am4charts.ValueAxis()) : 
        valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.min = 0;

      let series = chart.series.push(new am4charts.ColumnSeries());
      if(this.isHorizontal) {
        series.dataFields.categoryY = this.category;
        series.dataFields.valueX = this.value;
      } else {
        series.dataFields.categoryX = this.category;
        series.dataFields.valueY = this.value;
      }
      series.columns.template.strokeOpacity = 0;
      series.columns.template.column.cornerRadiusBottomRight = 5;
      series.columns.template.column.cornerRadiusTopRight = 5;

      let labelBullet = series.bullets.push(new am4charts.LabelBullet())
      if (this.isHorizontal)  {
        labelBullet.label.dx = 10;
        labelBullet.locationX = 1;
        labelBullet.label.horizontalCenter = "left";
        labelBullet.label.text = "{values.valueX.workingValue.formatNumber('#.0as')}";
      } else {
        labelBullet.locationY = 0;
        labelBullet.label.dy = -10;
        labelBullet.label.text = "{values.valueY.workingValue.formatNumber('#.0as')}";
      }
        

      chart.colors.list = [
        am4core.color("#CD5C5C"),
        
        am4core.color("#F08080"),
        am4core.color("#FA8072"),
        
        am4core.color("#FF8A65"),
        am4core.color("#FF7043"),
        am4core.color("#FF5722"),
        am4core.color("#F4511E"),
        am4core.color("#E64A19"),
        // am4core.color("#D84315"),
        // am4core.color("#BF360C")
        
        am4core.color("#E9967A"),
        am4core.color("#FFA07A"),
      ];

      // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
      series.columns.template.adapter.add("fill", function(fill, target){
        return chart.colors.getIndex(target.dataItem.index);
      });

      this.isSorted && (categoryAxis.sortBySeries = series);

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
