import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCategoryNavigationModule } from './custom-category-navigation/custom-category-navigation.module';
import { CustomCategoryNavigationUiModule } from './custom-category-navigation-ui/custom-category-navigation-ui.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomCategoryNavigationModule,
    CustomCategoryNavigationUiModule,
  ],
})
export class NavigationModule {}
