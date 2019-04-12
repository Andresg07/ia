import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryDayPage } from './summary-day.page';

describe('SummaryDayPage', () => {
  let component: SummaryDayPage;
  let fixture: ComponentFixture<SummaryDayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryDayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryDayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
