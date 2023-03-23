import { NgModule } from '@angular/core';
import {
  checkoutTranslationChunksConfig,
  checkoutTranslations,
} from '@spartacus/checkout/assets';
import { ShippingAddressComponent } from '@spartacus/checkout/components';
import { CheckoutRootModule, CHECKOUT_FEATURE } from '@spartacus/checkout/root';
import { CmsConfig, I18nConfig, provideConfig } from '@spartacus/core';
import { customCheckoutRoutingConfig } from './config/custom-checkout-routing.config';

@NgModule({
  declarations: [],
  imports: [CheckoutRootModule],
  providers: [
    provideConfig(customCheckoutRoutingConfig),
    provideConfig(<CmsConfig>{
      featureModules: {
        [CHECKOUT_FEATURE]: {
          module: () =>
            import('@spartacus/checkout').then((m) => m.CheckoutModule),
        },
      },
    }),
    provideConfig(<CmsConfig>{
      cmsComponents: {
        CheckoutDeliveryAddress: {
          component: ShippingAddressComponent,
        },
      },
    }),
    provideConfig(<I18nConfig>{
      i18n: {
        resources: checkoutTranslations,
        chunks: checkoutTranslationChunksConfig,
      },
    }),
  ],
})
export class CheckoutFeatureModule {}
