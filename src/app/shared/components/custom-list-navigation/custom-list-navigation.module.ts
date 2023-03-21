import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomSortingComponent } from './custom-sorting/custom-sorting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { IconModule } from '@spartacus/storefront';
import { CustomPaginationModule } from './custom-pagination/custom-pagination.module';
import { CustomPaginationComponent } from './custom-pagination/custom-pagination.component';

@NgModule({
  declarations: [CustomSortingComponent],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    IconModule,
    CustomPaginationModule,
  ],
  exports: [CustomSortingComponent, CustomPaginationComponent],
})
export class CustomListNavigationModule {}
