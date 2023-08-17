import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLoginFormComponent } from './custom-login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  UrlModule,
  I18nModule,
  CmsConfig,
  provideConfig,
  AuthService,
  GlobalMessageService,
  WindowRef,
  DeferLoadingStrategy,
} from '@spartacus/core';
import {
  FormErrorsModule,
  SpinnerModule,
  IconModule,
} from '@spartacus/storefront';
import { LoginFormComponentService } from '@spartacus/user/account/components';

@NgModule({
  declarations: [CustomLoginFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    UrlModule,
    I18nModule,
    FormErrorsModule,
    SpinnerModule,
    IconModule,
  ],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        ReturningCustomerLoginComponent: {
          component: () =>
            import('./custom-login-form.component').then(
              (m) => m.CustomLoginFormComponent
            ),
          deferLoading: DeferLoadingStrategy.DEFER,
          providers: [
            {
              provide: LoginFormComponentService,
              useClass: LoginFormComponentService,
              deps: [AuthService, GlobalMessageService, WindowRef],
            },
          ],
        },
      },
    }),
  ],
  /*

        cmsComponents: {
        ProductCarouselComponent: {
          component: () =>
            import('./custom-product-carousel.component').then(
              (m) => m.CustomProductCarouselComponent
            ),
          deferLoading: DeferLoadingStrategy.DEFER,
        },
  */

  exports: [CustomLoginFormComponent],
})
export class CustomLoginFormModule {}
