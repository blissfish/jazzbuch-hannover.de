import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HannoverComponent } from './hannover.component';

describe('HannoverComponent', () => {
  let component: HannoverComponent;
  let fixture: ComponentFixture<HannoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HannoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HannoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
