import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomProductScrollComponent } from './custom-product-scroll.component';
import { SpinnerModule } from '@spartacus/storefront';
import { ProductCardModule } from '../product-card/product-card.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { I18nModule } from '@spartacus/core';

@NgModule({
  declarations: [CustomProductScrollComponent],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    SpinnerModule,
    ProductCardModule,
    I18nModule,
  ],
  exports: [CustomProductScrollComponent],
})
export class CustomProductScrollModule {}
