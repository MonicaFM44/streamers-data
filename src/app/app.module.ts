import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ToolbarComponent, HeaderComponent, GlobalAnalyticsComponent, DailyAnalyticsComponent } from './components';
import { ThousandSuffixPipe, BarChartComponent } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HeaderComponent,
    GlobalAnalyticsComponent,
    DailyAnalyticsComponent,
    BarChartComponent,
    ThousandSuffixPipe,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
