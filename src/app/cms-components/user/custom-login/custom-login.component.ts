import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '@spartacus/core';
import { ModalRef, ModalService } from '@spartacus/storefront';
import { LoginComponent } from '@spartacus/user/account/components';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { CustomLoginFormComponent } from '../custom-login-form/custom-login-form.component';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-custom-login',
  templateUrl: './custom-login.component.html',
  styleUrls: ['./custom-login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CustomLoginComponent extends LoginComponent implements OnInit {
  modalRef: ModalRef;
  isUserLoggedIn$: Observable<boolean> = this._auth.isUserLoggedIn();
  constructor(
    public _auth: AuthService,
    public _userAccount: UserAccountFacade,
    private modalService: ModalService
  ) {
    super(_auth, _userAccount);
  }

  ngOnInit(): void {
    this.user$ = this._auth.isUserLoggedIn().pipe(
      switchMap((isUserLoggedIn) => {
        if (isUserLoggedIn) {
          this.modalService.closeActiveModal('logged in');
          return this._userAccount.get();
        } else {
          return of(undefined);
        }
      })
    );
  }

  openLoginModal() {
    let modalInstance: any;
    this.modalRef = this.modalService.open(CustomLoginFormComponent, {
      centered: true,
      size: 'lg',
      windowClass: 'login-modal',
    });
    modalInstance = this.modalRef.componentInstance;
    modalInstance.fromModal = true;
  }

  logout() {
    this._auth.logout();
  }
}
