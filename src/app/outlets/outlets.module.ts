import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomUserHeaderModule } from './custom-user-header/custom-user-header.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CustomUserHeaderModule],
  exports: [CustomUserHeaderModule],
})
export class OutletsModule {}
