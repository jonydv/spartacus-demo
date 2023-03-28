import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLayoutModule } from './custom-layout/custom-layout.module';
import { CustomIconsModule } from './custom-icons/custom-icons.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomLayoutModule,
    CustomIconsModule,
    RouterModule.forRoot([], {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
    }),
  ],
})
export class ConfigModule {}
