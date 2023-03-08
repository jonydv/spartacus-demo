import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLoginModule } from './custom-login/custom-login.module';
import { CustomLoginFormModule } from './custom-login-form/custom-login-form.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CustomLoginModule, CustomLoginFormModule],
})
export class UserModule {}
