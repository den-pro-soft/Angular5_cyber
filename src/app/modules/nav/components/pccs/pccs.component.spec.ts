import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PccsComponent } from './pccs.component';

describe('PccsComponent', () => {
  let component: PccsComponent;
  let fixture: ComponentFixture<PccsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PccsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PccsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
