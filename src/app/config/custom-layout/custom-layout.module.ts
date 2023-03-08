import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideConfig } from '@spartacus/core';
import { CustomLayoutConfig } from './custom-layout.config';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [provideConfig(CustomLayoutConfig)],
})
export class CustomLayoutModule {}
