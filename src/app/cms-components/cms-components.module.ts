import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationModule } from './navigation/navigation.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { CustomBannerModule } from './custom-banner/custom-banner.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavigationModule,
    ProductModule,
    UserModule,
    CustomBannerModule,
  ],
})
export class CmsComponentsModule {}
