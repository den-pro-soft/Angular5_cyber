import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PccsResetComponent } from './pccs-reset.component';

describe('PccsResetComponent', () => {
  let component: PccsResetComponent;
  let fixture: ComponentFixture<PccsResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PccsResetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PccsResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
