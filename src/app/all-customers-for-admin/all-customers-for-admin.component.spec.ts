import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCustomersForAdminComponent } from './all-customers-for-admin.component';

describe('AllCustomersForAdminComponent', () => {
  let component: AllCustomersForAdminComponent;
  let fixture: ComponentFixture<AllCustomersForAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCustomersForAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCustomersForAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
