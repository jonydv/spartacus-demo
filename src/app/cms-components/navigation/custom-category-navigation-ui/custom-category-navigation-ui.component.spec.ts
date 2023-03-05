import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCategoryNavigationUiComponent } from './custom-category-navigation-ui.component';

describe('CustomCategoryNavigationUiComponent', () => {
  let component: CustomCategoryNavigationUiComponent;
  let fixture: ComponentFixture<CustomCategoryNavigationUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomCategoryNavigationUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCategoryNavigationUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
