import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCategoryNavigationComponent } from './custom-category-navigation.component';
import { provideConfig, CmsConfig } from '@spartacus/core';
import { NavigationModule } from '@spartacus/storefront';
import { CustomCategoryNavigationUiModule } from '../custom-category-navigation-ui/custom-category-navigation-ui.module';

@NgModule({
  declarations: [CustomCategoryNavigationComponent],
  imports: [CommonModule, CustomCategoryNavigationUiModule],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        CategoryNavigationComponent: {
          component: CustomCategoryNavigationComponent,
        },
      },
    }),
  ],
})
export class CustomCategoryNavigationModule {}
