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
          component: CustomLoginFormComponent,
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
  exports: [CustomLoginFormComponent],
})
export class CustomLoginFormModule {}
