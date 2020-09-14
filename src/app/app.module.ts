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
import { ThousandSuffixPipe, BarChartComponent, KpiComponent } from './shared';

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
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
