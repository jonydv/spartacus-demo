import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Product } from '@spartacus/core';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Input() isMobile: boolean = false;
  @Input() fromProductList: boolean = false;
}
