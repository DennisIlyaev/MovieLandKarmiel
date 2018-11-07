import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalloneComponent } from './hallone.component';

describe('HalloneComponent', () => {
  let component: HalloneComponent;
  let fixture: ComponentFixture<HalloneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalloneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
