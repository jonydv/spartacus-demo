import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLayoutModule } from './custom-layout/custom-layout.module';
import { CustomIconsModule } from './custom-icons/custom-icons.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CustomLayoutModule, CustomIconsModule],
})
export class ConfigModule {}
