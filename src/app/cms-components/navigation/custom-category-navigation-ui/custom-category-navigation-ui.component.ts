import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import {
  HamburgerMenuService,
  NavigationUIComponent,
} from '@spartacus/storefront';

@Component({
  selector: 'app-custom-category-navigation-ui',
  templateUrl: './custom-category-navigation-ui.component.html',
  styleUrls: ['./custom-category-navigation-ui.component.scss'],
})
export class CustomCategoryNavigationUiComponent
  extends NavigationUIComponent
  implements OnInit
{
  constructor(
    protected _router: Router,
    protected _renderer: Renderer2,
    protected _elemRef: ElementRef,
    protected hamburgerMenuService: HamburgerMenuService
  ) {
    super(_router, _renderer, _elemRef, hamburgerMenuService);
  }

  ngOnInit(): void {}
}
