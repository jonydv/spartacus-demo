import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCarouselModule } from './product-carousel/product-carousel.module';
import { CustomProductListModule } from './custom-product-list/custom-product-list.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ProductCarouselModule, CustomProductListModule],
})
export class ProductModule {}
