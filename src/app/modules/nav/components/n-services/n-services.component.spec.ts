import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NServicesComponent } from './n-services.component';

describe('NServicesComponent', () => {
  let component: NServicesComponent;
  let fixture: ComponentFixture<NServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
