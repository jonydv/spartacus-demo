import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLoginComponent } from './custom-login.component';
import {
  AuthService,
  CmsConfig,
  GlobalMessageService,
  provideConfig,
  UrlModule,
  WindowRef,
} from '@spartacus/core';
import { IconModule, PageSlotModule } from '@spartacus/storefront';
import { LoginFormComponentService } from '@spartacus/user/account/components';
import { I18nModule } from '@spartacus/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CustomLoginComponent],
  imports: [
    CommonModule,
    IconModule,
    I18nModule,
    PageSlotModule,
    RouterModule,
    UrlModule,
  ],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        LoginComponent: {
          component: CustomLoginComponent,
        },
      },
    }),
    {
      provide: LoginFormComponentService,
      useClass: LoginFormComponentService,
      deps: [AuthService, GlobalMessageService, WindowRef],
    },
  ],
  exports: [CustomLoginComponent],
})
export class CustomLoginModule {}
