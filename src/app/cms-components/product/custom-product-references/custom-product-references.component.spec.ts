import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomProductReferencesComponent } from './custom-product-references.component';

describe('CustomProductReferencesComponent', () => {
  let component: CustomProductReferencesComponent;
  let fixture: ComponentFixture<CustomProductReferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomProductReferencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomProductReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
