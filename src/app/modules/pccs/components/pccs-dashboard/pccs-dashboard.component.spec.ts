import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PccsDashboardComponent } from './pccs-dashboard.component';

describe('PccsDashboardComponent', () => {
  let component: PccsDashboardComponent;
  let fixture: ComponentFixture<PccsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PccsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PccsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
