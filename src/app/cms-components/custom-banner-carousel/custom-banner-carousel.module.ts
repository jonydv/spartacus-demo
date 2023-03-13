import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomBannerCarouselComponent } from './custom-banner-carousel.component';
import { RouterModule } from '@angular/router';
import { GenericLinkModule, MediaModule } from '@spartacus/storefront';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [CustomBannerCarouselComponent],
  imports: [
    CommonModule,
    RouterModule,
    GenericLinkModule,
    MediaModule,
    SwiperModule,
  ],
  exports: [CustomBannerCarouselComponent],
})
export class CustomBannerCarouselModule {}
