import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchInputFormUpdateComponent } from './branch-input-form-update.component';

describe('BranchInputFormUpdateComponent', () => {
  let component: BranchInputFormUpdateComponent;
  let fixture: ComponentFixture<BranchInputFormUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BranchInputFormUpdateComponent]
    });
    fixture = TestBed.createComponent(BranchInputFormUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
