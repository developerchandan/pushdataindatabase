import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouthComponent } from './abouth.component';

describe('AbouthComponent', () => {
  let component: AbouthComponent;
  let fixture: ComponentFixture<AbouthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbouthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbouthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
