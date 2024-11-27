import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoViewComponent } from './ro-view.component';

describe('RoViewComponent', () => {
  let component: RoViewComponent;
  let fixture: ComponentFixture<RoViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoViewComponent]
    });
    fixture = TestBed.createComponent(RoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
