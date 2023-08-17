import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomProductCarouselComponent } from './product-carousel.component';
import {
  CmsConfig,
  DeferLoadingStrategy,
  provideConfig,
} from '@spartacus/core';
import { SwiperModule } from 'swiper/angular';
import { MediaModule, IconModule } from '@spartacus/storefront';
import { ProductCardModule } from '../product-card/product-card.module';

@NgModule({
  declarations: [CustomProductCarouselComponent],
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
        ProductCarouselComponent: {
          component: () =>
            import('./product-carousel.component').then(
              (m) => m.CustomProductCarouselComponent
            ),
          deferLoading: DeferLoadingStrategy.DEFER,
        },
      },
    }),
  ],
})
export class ProductCarouselModule {}
