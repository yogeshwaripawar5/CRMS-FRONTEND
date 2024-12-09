import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoViewComponent } from './ho-view.component';

describe('HoViewComponent', () => {
  let component: HoViewComponent;
  let fixture: ComponentFixture<HoViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoViewComponent]
    });
    fixture = TestBed.createComponent(HoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
