import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideConfig } from '@spartacus/core';
import { CustomIconsConfig } from './custom-icons.config';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [provideConfig(CustomIconsConfig)],
})
export class CustomIconsModule {}
