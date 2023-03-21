import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideConfig, CmsConfig } from '@spartacus/core';
import { ScrollToTopComponent } from './scroll-to-top.component';
import { IconModule } from '@spartacus/storefront';

@NgModule({
  declarations: [ScrollToTopComponent],
  imports: [CommonModule, IconModule],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        ScrollToTopComponent: {
          component: ScrollToTopComponent,
        },
      },
    }),
  ],
})
export class ScrollToTopModule {}
