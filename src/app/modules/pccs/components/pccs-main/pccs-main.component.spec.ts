import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PccsMainComponent } from './pccs-main.component';

describe('PccsMainComponent', () => {
  let component: PccsMainComponent;
  let fixture: ComponentFixture<PccsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PccsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PccsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
