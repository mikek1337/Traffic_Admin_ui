import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignTrafficComponent } from './assign-traffic.component';

describe('AssignTrafficComponent', () => {
  let component: AssignTrafficComponent;
  let fixture: ComponentFixture<AssignTrafficComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignTrafficComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignTrafficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
