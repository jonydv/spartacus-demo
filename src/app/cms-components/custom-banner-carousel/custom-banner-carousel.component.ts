import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import SwiperCore, { Autoplay, Navigation, SwiperOptions } from 'swiper';
import { CmsBannerComponent } from '@spartacus/core';
SwiperCore.use([Navigation, Autoplay]);
@Component({
  selector: 'app-custom-banner-carousel',
  templateUrl: './custom-banner-carousel.component.html',
  styleUrls: ['./custom-banner-carousel.component.scss'],
})
export class CustomBannerCarouselComponent implements OnInit, OnChanges {
  @Input() data!: CmsBannerComponent | any;
  @Input() isMobile: boolean = false;
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

  constructor() {}

  ngOnInit(): void {
    this.initializeMockBanners();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes?.['isMobile']?.firstChange) {
      this.isMobile = changes?.['isMobile']?.currentValue;
      this.initializeMockBanners();
    }
  }
  initializeMockBanners() {
    if (this.isMobile) {
      this.banners = [
        {
          src: '../../../assets/banners/banner-1-mobile.webp',
          alt: 'ml 1 mobile',
        },
        {
          src: '../../../assets/banners/banner-2-mobile.webp',
          alt: 'ml 2 mobile',
        },
      ];
    } else {
      this.banners = [
        { src: '../../../assets/banners/banner-1.webp', alt: 'ml 1' },
        { src: '../../../assets/banners/banner-2.webp', alt: 'ml 2' },
      ];
    }
  }
}
