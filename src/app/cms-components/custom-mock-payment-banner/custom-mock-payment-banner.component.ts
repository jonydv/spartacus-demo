import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-custom-mock-payment-banner',
  templateUrl: './custom-mock-payment-banner.component.html',
  styleUrls: ['./custom-mock-payment-banner.component.scss'],
})
export class CustomMockPaymentBannerComponent implements OnInit, OnChanges {
  @Input() isMobile: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes?.['isMobile']?.firstChange) {
      this.isMobile = changes?.['isMobile']?.currentValue;
    }
  }
}
