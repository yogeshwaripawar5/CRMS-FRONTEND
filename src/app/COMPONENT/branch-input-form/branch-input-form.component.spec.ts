import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchInputFormComponent } from './branch-input-form.component';

describe('BranchInputFormComponent', () => {
  let component: BranchInputFormComponent;
  let fixture: ComponentFixture<BranchInputFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BranchInputFormComponent]
    });
    fixture = TestBed.createComponent(BranchInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
