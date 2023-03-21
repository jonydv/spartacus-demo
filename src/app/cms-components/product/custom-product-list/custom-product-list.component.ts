import {
  Component,
  OnDestroy,
  OnInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CustomBreakpointService } from '../../../common/services/custom-breakpoint.service';
import { Observable, Subscription } from 'rxjs';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomProductListComponent
  extends ProductListComponent
  implements OnInit, OnDestroy
{
  isMobile$: Observable<boolean> = this.customBreakpointService.isMobile();
  _subscription: Subscription = new Subscription();
  constructor(
    pageLayoutService: PageLayoutService,
    productListComponentService: ProductListComponentService,
    scrollConfig: ViewConfig,
    private customBreakpointService: CustomBreakpointService,
    private cd: ChangeDetectorRef
  ) {
    super(pageLayoutService, productListComponentService, scrollConfig);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this._subscription.add(
      this.isMobile$.subscribe((value) => {
        this.isInfiniteScroll = value;
        this.cd.detectChanges();
      })
    );
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    this._subscription.unsubscribe();
  }
}
