import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPaginationComponent } from './custom-pagination.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CustomPaginationComponent],
  imports: [CommonModule, RouterModule],
  exports: [CustomPaginationComponent],
})
export class CustomPaginationModule {}
