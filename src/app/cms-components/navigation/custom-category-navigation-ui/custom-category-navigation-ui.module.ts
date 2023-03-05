import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCategoryNavigationUiComponent } from './custom-category-navigation-ui.component';
import { GenericLinkModule, IconModule } from '@spartacus/storefront';
import { I18nModule } from '@spartacus/core';

@NgModule({
  declarations: [CustomCategoryNavigationUiComponent],
  imports: [CommonModule, IconModule, GenericLinkModule, I18nModule],
  exports: [CustomCategoryNavigationUiComponent],
})
export class CustomCategoryNavigationUiModule {}
