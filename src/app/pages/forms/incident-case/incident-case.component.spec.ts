import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentCaseComponent } from './incident-case.component';

describe('IncidentCaseComponent', () => {
  let component: IncidentCaseComponent;
  let fixture: ComponentFixture<IncidentCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
