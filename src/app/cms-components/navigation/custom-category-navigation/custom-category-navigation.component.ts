import { Component, OnInit } from '@angular/core';
import { CmsNavigationComponent } from '@spartacus/core';
import {
  CategoryNavigationComponent,
  CmsComponentData,
  NavigationService,
} from '@spartacus/storefront';

@Component({
  selector: 'app-custom-category-navigation',
  templateUrl: './custom-category-navigation.component.html',
  styleUrls: ['./custom-category-navigation.component.scss'],
})
export class CustomCategoryNavigationComponent
  extends CategoryNavigationComponent
  implements OnInit
{
  constructor(
    protected componentData: CmsComponentData<CmsNavigationComponent>,
    protected service: NavigationService
  ) {
    super(componentData, service);
  }

  ngOnInit(): void {}
}
