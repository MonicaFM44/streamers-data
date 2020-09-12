import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewershipComponent } from './viewership.component';

describe('ViewershipComponent', () => {
  let component: ViewershipComponent;
  let fixture: ComponentFixture<ViewershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
