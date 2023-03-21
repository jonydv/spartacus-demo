import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaginationBuilder, PaginationComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-custom-pagination',
  templateUrl: './custom-pagination.component.html',
  styleUrls: ['./custom-pagination.component.scss'],
})
export class CustomPaginationComponent
  extends PaginationComponent
  implements OnInit
{
  constructor(
    paginationBuilder: PaginationBuilder,
    activatedRoute: ActivatedRoute
  ) {
    super(paginationBuilder, activatedRoute);
  }

  ngOnInit(): void {}
}
