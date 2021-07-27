import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsForAdminComponent } from './products-for-admin.component';

describe('ProductsForAdminComponent', () => {
  let component: ProductsForAdminComponent;
  let fixture: ComponentFixture<ProductsForAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsForAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsForAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
