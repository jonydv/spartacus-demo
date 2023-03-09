import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutletRefModule } from '@spartacus/storefront';
import { CustomUserHeaderComponent } from './custom-user-header.component';
import { CustomLoginModule } from '../../cms-components/user/custom-login/custom-login.module';

@NgModule({
  declarations: [CustomUserHeaderComponent],
  imports: [CommonModule, OutletRefModule, CustomLoginModule],
  exports: [CustomUserHeaderComponent],
})
export class CustomUserHeaderModule {}
