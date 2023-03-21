import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CmsConfig,
  FeaturesConfigModule,
  I18nModule,
  provideConfig,
  UrlModule,
} from '@spartacus/core';
import {
  MediaModule,
  IconModule,
  AddToCartModule,
  ItemCounterModule,
  ListNavigationModule,
  StarRatingModule,
  SpinnerModule,
  OutletModule,
  ViewConfig,
  defaultViewConfig,
} from '@spartacus/storefront';
import { CustomProductListComponent } from './custom-product-list.component';
import { RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ProductListModule } from '@spartacus/storefront';
import { ProductCardModule } from '../product-card/product-card.module';
import { CustomProductScrollModule } from '../custom-product-scroll/custom-product-scroll.module';
import { CustomListNavigationModule } from '../../../shared/components/custom-list-navigation/custom-list-navigation.module';

@NgModule({
  declarations: [CustomProductListComponent],
  imports: [
    CommonModule,
    RouterModule,
    MediaModule,
    AddToCartModule,
    ItemCounterModule,
    ListNavigationModule,
    UrlModule,
    I18nModule,
    StarRatingModule,
    IconModule,
    SpinnerModule,
    InfiniteScrollModule,
    FeaturesConfigModule,
    OutletModule,
    ProductListModule,
    ProductCardModule,
    CustomProductScrollModule,
    CustomListNavigationModule,
  ],
  providers: [
    provideConfig(<ViewConfig>defaultViewConfig),
    provideConfig(<CmsConfig>{
      pagination: {
        addFirst: true,
        addLast: true,
        addNext: true,
        addStart: false,
        addEnd: false,
        addPrevious: true,
        rangeCount: 3,
        addDots: true,
      },
      cmsComponents: {
        CMSProductListComponent: {
          component: CustomProductListComponent,
        },
        ProductGridComponent: {
          component: CustomProductListComponent,
        },
        SearchResultsListComponent: {
          component: CustomProductListComponent,
        },
      },
    }),
  ],
})
export class CustomProductListModule {}
