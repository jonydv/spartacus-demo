import { Component, OnInit } from '@angular/core';
import { CmsBannerComponent } from '@spartacus/core';
import {
  BannerComponent,
  CmsComponentData,
  PageSlotComponent,
} from '@spartacus/storefront';
import SwiperCore, { Autoplay, Navigation, SwiperOptions } from 'swiper';
import { CustomBreakpointService } from '../../common/services/custom-breakpoint.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

SwiperCore.use([Navigation, Autoplay]);

@Component({
  selector: 'app-custom-banner',
  templateUrl: './custom-banner.component.html',
  styleUrls: ['./custom-banner.component.scss'],
})
export class CustomBannerComponent extends BannerComponent implements OnInit {
  slot: PageSlotComponent = this.pageSlotComponent;
  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: true,
    navigation: true,
  };
  banners = [
    { src: '../../../assets/banners/banner-1.webp', alt: 'ml 1' },
    { src: '../../../assets/banners/banner-2.webp', alt: 'ml 2' },
  ];
  isMobile$: Observable<boolean> = this.customBreakpointService.isMobile();
  constructor(
    protected component: CmsComponentData<CmsBannerComponent>,
    protected pageSlotComponent: PageSlotComponent,
    protected customBreakpointService: CustomBreakpointService
  ) {
    super(component);
  }

  ngOnInit(): void {}
}
