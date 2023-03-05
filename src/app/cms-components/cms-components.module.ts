import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationModule } from './navigation/navigation.module';
import { ProductModule } from './product/product.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, NavigationModule, ProductModule],
})
export class CmsComponentsModule {}
