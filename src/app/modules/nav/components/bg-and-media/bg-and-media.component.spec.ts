import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgAndMediaComponent } from './bg-and-media.component';

describe('BgAndMediaComponent', () => {
  let component: BgAndMediaComponent;
  let fixture: ComponentFixture<BgAndMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgAndMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgAndMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
