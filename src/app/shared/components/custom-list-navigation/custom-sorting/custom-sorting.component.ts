import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SortingComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-custom-sorting',
  templateUrl: './custom-sorting.component.html',
  styleUrls: ['./custom-sorting.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CustomSortingComponent extends SortingComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
