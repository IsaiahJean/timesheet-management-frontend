import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTimecardComponent } from './new-timecard.component';

describe('NewTimecardComponent', () => {
  let component: NewTimecardComponent;
  let fixture: ComponentFixture<NewTimecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTimecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTimecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
