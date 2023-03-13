import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import { RouterModule } from '@angular/router';
import { MediaModule } from '@spartacus/storefront';
import { UrlModule } from '@spartacus/core';

@NgModule({
  declarations: [ProductCardComponent],
  imports: [CommonModule, RouterModule, MediaModule, UrlModule],
  exports: [ProductCardComponent],
})
export class ProductCardModule {}
