import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMockPaymentBannerComponent } from './custom-mock-payment-banner.component';

@NgModule({
  declarations: [CustomMockPaymentBannerComponent],
  imports: [CommonModule],
  exports: [CustomMockPaymentBannerComponent],
})
export class CustomMockPaymentBannerModule {}
