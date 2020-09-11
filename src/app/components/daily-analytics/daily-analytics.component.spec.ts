import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyAnalyticsComponent } from './daily-analytics.component';

describe('DailyAnalyticsComponent', () => {
  let component: DailyAnalyticsComponent;
  let fixture: ComponentFixture<DailyAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyAnalyticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
