import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatermarkComponent } from './watermark.component';

describe('WatermarkComponent', () => {
  let component: WatermarkComponent;
  let fixture: ComponentFixture<WatermarkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WatermarkComponent]
    });
    fixture = TestBed.createComponent(WatermarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
