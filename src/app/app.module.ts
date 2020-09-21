import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { 
  ToolbarComponent, 
  HeaderComponent, 
  GlobalAnalyticsComponent, 
  DailyAnalyticsComponent, 
  FooterComponent, 
  ViewershipComponent,
  ViewershipItemComponent 
} from './components';
import { ThousandSuffixPipe, BarChartComponent, LineChartComponent, KpiComponent } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HeaderComponent,
    GlobalAnalyticsComponent,
    DailyAnalyticsComponent,
    BarChartComponent,
    ThousandSuffixPipe,
    FooterComponent,
    ViewershipComponent,
    ViewershipItemComponent,
    KpiComponent,
    LineChartComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
