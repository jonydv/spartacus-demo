import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomBannerComponent } from './custom-banner.component';
import { GenericLinkModule, MediaModule } from '@spartacus/storefront';
import { RouterModule } from '@angular/router';
import { provideConfig, CmsConfig } from '@spartacus/core';
import { SwiperModule } from 'swiper/angular';
import { CustomMockPaymentBannerModule } from '../custom-mock-payment-banner/custom-mock-payment-banner.module';
import { CustomBannerCarouselModule } from '../custom-banner-carousel/custom-banner-carousel.module';

@NgModule({
  declarations: [CustomBannerComponent],
  imports: [
    CommonModule,
    RouterModule,
    GenericLinkModule,
    MediaModule,
    SwiperModule,
    CustomMockPaymentBannerModule,
    CustomBannerCarouselModule,
  ],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        SimpleResponsiveBannerComponent: {
          component: CustomBannerComponent,
        },
        BannerComponent: {
          component: CustomBannerComponent,
        },
        SimpleBannerComponent: {
          component: CustomBannerComponent,
        },
      },
    }),
  ],
})
export class CustomBannerModule {}
