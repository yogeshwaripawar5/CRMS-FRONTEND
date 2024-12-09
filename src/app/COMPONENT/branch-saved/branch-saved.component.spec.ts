import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchSavedComponent } from './branch-saved.component';

describe('BranchSavedComponent', () => {
  let component: BranchSavedComponent;
  let fixture: ComponentFixture<BranchSavedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BranchSavedComponent]
    });
    fixture = TestBed.createComponent(BranchSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
