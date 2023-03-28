import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsConfig, provideConfig } from '@spartacus/core';
import { CustomProductReferencesComponent } from './custom-product-references.component';
import { MediaModule, IconModule } from '@spartacus/storefront';
import { ProductCardModule } from '../product-card/product-card.module';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [CustomProductReferencesComponent],
  imports: [
    CommonModule,
    SwiperModule,
    MediaModule,
    IconModule,
    ProductCardModule,
  ],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        ProductReferencesComponent: {
          component: CustomProductReferencesComponent,
        },
      },
    }),
  ],
})
export class CustomProductReferencesModule {}
