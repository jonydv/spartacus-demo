import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCarouselModule } from './product-carousel/product-carousel.module';
import { CustomProductListModule } from './custom-product-list/custom-product-list.module';
import { CustomProductReferencesModule } from './custom-product-references/custom-product-references.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductCarouselModule,
    CustomProductListModule,
    CustomProductReferencesModule,
  ],
})
export class ProductModule {}
