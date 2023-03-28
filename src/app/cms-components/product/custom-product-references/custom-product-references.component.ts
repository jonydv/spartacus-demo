import { Component, OnInit } from '@angular/core';
import {
  CmsProductReferencesComponent,
  ProductReferenceService,
} from '@spartacus/core';
import {
  CmsComponentData,
  CurrentProductService,
  ProductReferencesComponent,
} from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import SwiperCore, { Autoplay, Navigation, SwiperOptions } from 'swiper';
import { CustomBreakpointService } from '../../../common/services/custom-breakpoint.service';

SwiperCore.use([Navigation, Autoplay]);

@Component({
  selector: 'app-custom-product-references',
  templateUrl: './custom-product-references.component.html',
  styleUrls: ['./custom-product-references.component.scss'],
})
export class CustomProductReferencesComponent
  extends ProductReferencesComponent
  implements OnInit
{
  isMobile$: Observable<boolean> = this.customBreakpointService.isMobile();
  swiperConfig: SwiperOptions = {
    slidesPerView: 4,
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
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },
  };
  get componentData$(): Observable<CmsProductReferencesComponent> {
    return this.cmsComponentData.data$.pipe(filter((data) => !!data));
  }
  constructor(
    cmsComponentData: CmsComponentData<CmsProductReferencesComponent>,
    currentProductService: CurrentProductService,
    productReferenceService: ProductReferenceService,
    protected customBreakpointService: CustomBreakpointService
  ) {
    super(cmsComponentData, currentProductService, productReferenceService);
  }

  ngOnInit(): void {}
}
