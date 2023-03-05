import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCategoryNavigationComponent } from './custom-category-navigation.component';

describe('CustomCategoryNavigationComponent', () => {
  let component: CustomCategoryNavigationComponent;
  let fixture: ComponentFixture<CustomCategoryNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomCategoryNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCategoryNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
