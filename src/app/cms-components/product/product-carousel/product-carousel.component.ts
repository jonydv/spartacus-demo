import { Component, OnInit } from '@angular/core';
import {
  ProductService,
  CmsProductCarouselComponent as model,
} from '@spartacus/core';
import {
  CmsComponentData,
  ProductCarouselComponent,
} from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { CustomBreakpointService } from 'src/app/common/services/custom-breakpoint.service';
import SwiperCore, { Autoplay, Navigation, SwiperOptions } from 'swiper';

SwiperCore.use([Navigation, Autoplay]);

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss'],
})
export class CustomProductCarouselComponent
  extends ProductCarouselComponent
  implements OnInit
{
  _componentData$: Observable<model> = this.componentData.data$.pipe(
    filter((data) => data != null)
  );
  isMobile$: Observable<boolean> = this.customBreakpointService.isMobile();
  swiperConfig: SwiperOptions = {
    slidesPerView: 5,
    spaceBetween: 4,
    pagination: true,
    navigation: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      356: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      526: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      696: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      991: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
      1400: {
        slidesPerView: 5,
        slidesPerGroup: 5,
      },
    },
  };
  constructor(
    protected componentData: CmsComponentData<model>,
    protected productService: ProductService,
    protected customBreakpointService: CustomBreakpointService
  ) {
    super(componentData, productService);
  }

  ngOnInit(): void {}
}
