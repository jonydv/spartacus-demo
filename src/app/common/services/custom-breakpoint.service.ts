import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { BreakpointService, LayoutConfig } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CustomBreakpointService extends BreakpointService {
  private mobileSizes = ['md', 'sm', 'xs'];

  constructor(
    protected winRef: WindowRef,
    protected layoutConfig: LayoutConfig,
    @Inject(PLATFORM_ID) protected platform: any
  ) {
    super(winRef, layoutConfig, platform);
  }

  isMobile(): Observable<boolean> {
    return this.breakpoint$.pipe(
      map((size) => this.mobileSizes.includes(size)),
      distinctUntilChanged()
    );
  }
}
