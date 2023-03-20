import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ProductListComponent,
  PageLayoutService,
  ProductListComponentService,
  ViewConfig,
} from '@spartacus/storefront';

@Component({
  selector: 'app-custom-product-list',
  templateUrl: './custom-product-list.component.html',
  styleUrls: ['./custom-product-list.component.scss'],
})
export class CustomProductListComponent
  extends ProductListComponent
  implements OnInit, OnDestroy
{
  constructor(
    pageLayoutService: PageLayoutService,
    productListComponentService: ProductListComponentService,
    scrollConfig: ViewConfig
  ) {
    super(pageLayoutService, productListComponentService, scrollConfig);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
