import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { CustomBreakpointService } from '../../../common/services/custom-breakpoint.service';
import { Observable } from 'rxjs';
import {
  HamburgerMenuService,
  NavigationUIComponent,
} from '@spartacus/storefront';

@Component({
  selector: 'app-custom-category-navigation-ui',
  templateUrl: './custom-category-navigation-ui.component.html',
  styleUrls: ['./custom-category-navigation-ui.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CustomCategoryNavigationUiComponent
  extends NavigationUIComponent
  implements OnInit
{
  childVisibility: number[] = [];
  isMobile$: Observable<boolean> = this.customBreakpointService.isMobile();
  constructor(
    protected _router: Router,
    protected _renderer: Renderer2,
    protected _elemRef: ElementRef,
    protected hamburgerMenuService: HamburgerMenuService,
    protected customBreakpointService: CustomBreakpointService
  ) {
    super(_router, _renderer, _elemRef, hamburgerMenuService);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  toggleChildVisibility(index: number): void {
    this.childVisibility = this.childVisibility.includes(index)
      ? (this.childVisibility = this.childVisibility.filter((active) => {
          return active != index;
        }))
      : [...this.childVisibility, index];
  }
}
