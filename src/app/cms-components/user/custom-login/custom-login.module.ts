import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLoginComponent } from './custom-login.component';
import {
  AuthService,
  CmsConfig,
  GlobalMessageService,
  provideConfig,
  WindowRef,
} from '@spartacus/core';
import { IconModule } from '@spartacus/storefront';
import { LoginFormComponentService } from '@spartacus/user/account/components';
import { I18nModule } from '@spartacus/core';

@NgModule({
  declarations: [CustomLoginComponent],
  imports: [CommonModule, IconModule, I18nModule],
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
})
export class CustomLoginModule {}
