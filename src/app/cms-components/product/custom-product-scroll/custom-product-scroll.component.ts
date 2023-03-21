import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  ProductListComponentService,
  ProductScrollComponent,
} from '@spartacus/storefront';

@Component({
  selector: 'app-custom-product-scroll',
  templateUrl: './custom-product-scroll.component.html',
  styleUrls: ['./custom-product-scroll.component.scss'],
})
export class CustomProductScrollComponent
  extends ProductScrollComponent
  implements OnInit
{
  constructor(
    productListComponentService: ProductListComponentService,
    ref: ChangeDetectorRef
  ) {
    super(productListComponentService, ref);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
