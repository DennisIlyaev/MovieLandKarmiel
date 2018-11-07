import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalltwoComponent } from './halltwo.component';

describe('HalltwoComponent', () => {
  let component: HalltwoComponent;
  let fixture: ComponentFixture<HalltwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalltwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalltwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
