import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomProductCarouselComponent } from './product-carousel.component';
import { CmsConfig, provideConfig } from '@spartacus/core';
import { SwiperModule } from 'swiper/angular';
import { RouterModule } from '@angular/router';
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
          component: CustomProductCarouselComponent,
        },
      },
    }),
  ],
})
export class ProductCarouselModule {}
