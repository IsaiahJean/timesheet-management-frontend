import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeCardManagementComponent } from './time-card-management.component';

describe('TimeCardManagementComponent', () => {
  let component: TimeCardManagementComponent;
  let fixture: ComponentFixture<TimeCardManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeCardManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeCardManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
