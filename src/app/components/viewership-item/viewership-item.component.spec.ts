import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewershipItemComponent } from './viewership-item.component';

describe('ViewershipItemComponent', () => {
  let component: ViewershipItemComponent;
  let fixture: ComponentFixture<ViewershipItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewershipItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewershipItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
